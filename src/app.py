import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from flask import Flask, jsonify
from flask_cors import CORS
from flask import request  

def scroll_to_bottom(driver):
    last_height = driver.execute_script("return document.body.scrollHeight")
    while True:
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break 
        last_height = new_height

app = Flask(__name__)
CORS(app)

@app.route('/api/linkedin-search', methods=['POST'])
def linkedin_search():

    data = request.get_json()
    print("Received data:", data)  # Debug print

    job = data['job']
    company = data['company']
    search_query = "\"" + job + "\" " + company

    chrome_options = Options()
    chrome_options.add_argument('--disable-blink-features=AutomationControlled')
    chrome_options.add_experimental_option('excludeSwitches', ['enable-automation'])
    chrome_options.add_experimental_option('useAutomationExtension', False)
    #chrome_options.add_argument('--headless=new')  # Run in background

    driver = webdriver.Chrome(options=chrome_options)
    wait = WebDriverWait(driver, 10)

    # Navigate to LinkedIn
    driver.get('https://www.linkedin.com/login')

    try:
        # Wait for and find username field
        username = wait.until(EC.presence_of_element_located((By.ID, "username")))
        username.send_keys("fairglenproject@gmail.com")
        
        # Find and fill password
        password = driver.find_element(By.ID, 'password')
        password.send_keys('??????')
        
        # Find and click submit button
        sign_in_button = driver.find_element(By.XPATH, '//* [@type="submit"]')
        sign_in_button.click()

        # Wait for login to complete and search bar to be visible
        search_field = wait.until(
            EC.presence_of_element_located((By.XPATH, '//*[@id="global-nav-typeahead"]/input'))
        )

        # Search for job title
        search_field.send_keys(search_query)
        search_field.send_keys(Keys.RETURN)

        # Get 'People' tab
        people_filter = wait.until(
            EC.element_to_be_clickable(
                (By.XPATH, "//div[contains(@class, 'search-reusables__filters-bar')]//ul//button[text()='People']")
            )
        )
        people_filter.click()
        
        # Create a dictionary with metadata and results
        search_results = {
            "metadata": {
                "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),  # Current UTC time
                "user": "user",
                "search_criteria": {
                    "job": job,
                    "company": company
                },
                "pages_scraped": 0
            },
            "results": []
        }
        
        # Function to process profiles on current page
        def process_current_page():
            # Wait for results list to load
            results_ul = wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "ul[role='list']"))
            )
            
            # Get all list items
            profile_items = results_ul.find_elements(By.CSS_SELECTOR, "li")
            
            for item in profile_items:
                try:
                    # Get role first to check if it matches our criteria
                    try:
                        role_element = item.find_element(
                            By.CSS_SELECTOR,
                            "div[class*='t-14 t-black t-normal']"
                        )
                        role = role_element.text.strip()
                        
                        if job.lower() not in role.lower() or company.lower() not in role.lower():
                            continue
                        
                    except:
                        continue
                    
                    # Get name
                    try:
                        name_element = item.find_element(
                            By.CSS_SELECTOR,
                            "span.t-16 span[aria-hidden='true']"
                        )
                        name = name_element.text.strip()
                    except:
                        name = "LinkedIn Member"
                    
                    # Get profile URL
                    try:
                        profile_element = item.find_element(
                            By.CSS_SELECTOR,
                            "a[data-test-app-aware-link][href*='/in/']"
                        )
                        profile_url = profile_element.get_attribute('href').split('?')[0]
                    except:
                        continue
                        
                    # Get profile photo URL
                    try:
                        photo_element = item.find_element(
                            By.CSS_SELECTOR,
                            "img.presence-entity__image"
                        )
                        photo_url = photo_element.get_attribute('src')
                    except:
                        photo_url = ""
                    
                    # Add to our results list
                    search_results["results"].append({
                        "name": name,
                        "position": role,
                        "linkedin_url": profile_url,
                        "photo_url": photo_url
                    })
                    
                except Exception as e:
                    print(f"Error processing a profile: {str(e)}")
                    continue
        
        # Process first page
        process_current_page()
        search_results["metadata"]["pages_scraped"] += 1
        print(f"Processed page 1")
        
        # Process pages 2 through 3
        for page_num in range(2, 4):
            try:
                scroll_to_bottom(driver)
                # Wait for pagination buttons and click the next page
                next_page_button = wait.until(
                    EC.element_to_be_clickable(
                        (By.CSS_SELECTOR, f"button[aria-label='Page {page_num}']")
                    )
                )
                driver.execute_script("arguments[0].scrollIntoView(true);", next_page_button)
                time.sleep(2)  # Wait for scroll to complete
                next_page_button.click()
                
                # Wait for new page to load
                time.sleep(2)  # Allow time for page transition
                
                # Process the new page
                process_current_page()
                search_results["metadata"]["pages_scraped"] += 1
                print(f"Processed page {page_num}")
                
            except Exception as e:
                print(f"Error processing page {page_num}: {str(e)}")
                break  # Stop if we can't process more pages
                    
        # Print summary
        print(f"\nProcessed {search_results['metadata']['pages_scraped']} pages")
        print(f"Found {len(search_results['results'])} matching profiles")

        return jsonify(search_results)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

    finally:
        driver.quit()

if __name__ == '__main__':
    app.run(debug=True, port=5000)
