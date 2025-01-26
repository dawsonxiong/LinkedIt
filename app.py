import pandas as pd
import time
import random
import requests
from bs4 import BeautifulSoup
from parsel import Selector
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import TimeoutException, NoSuchElementException

chrome_options = Options()
chrome_options.add_argument('--disable-blink-features=AutomationControlled')
chrome_options.add_experimental_option('excludeSwitches', ['enable-automation'])
chrome_options.add_experimental_option('useAutomationExtension', False)

driver = webdriver.Chrome(options=chrome_options)
wait = WebDriverWait(driver, 10)  # Create a WebDriverWait object with 10-second timeout

def validate_field(field):
    if field:
        pass
    else:
        field = 'No results'
        return field

# Navigate to LinkedIn
driver.get('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin')

try:
    # Wait for and find username field
    username = wait.until(EC.presence_of_element_located((By.ID, "username")))
    username.send_keys("lilyapples696@gmail.com")
    
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
    
    # Get search query and perform search
    job = input('What job?')
    company = input('What company?')
    search_query = "" + job + "" + company
    search_field.send_keys(search_query)
    search_field.send_keys(Keys.RETURN)
    
    # Get 'People' tab
    people_filter = wait.until(
        EC.element_to_be_clickable(
            (By.XPATH, "//div[contains(@class, 'search-reusables__filters-bar')]//ul//button[text()='People']")
        )
    )
    people_filter.click()
    
    time.sleep(5)
        
    # Find all profile links
    profiles = wait.until(
        EC.presence_of_all_elements_located(
            (By.CSS_SELECTOR, 'a[data-test-app-aware-link][href*="/in/"]')
        )
    )
    
    # Empty list of profile URLs
    all_profile_URLs = []
    
    # Extract profile URLs
    for profile in profiles:
        try:
            profile_URL = profile.get_attribute('href')
            all_profile_URLs.append(profile_URL)
        except:
            continue
    
    # Clean URLs
    clean_profile_URLs = []
    for url in all_profile_URLs:
        clean_url = url.split('?')[0]
        if clean_url not in clean_profile_URLs:
            clean_profile_URLs.append(clean_url)


    profile_containers = driver.find_elements(By.CLASS_NAME, "reusable-search__result-container")
    current_positions = []

    for container in profile_containers:
        try:
            subtitle = container.find_element(By.CSS_SELECTOR, ".entity-result__primary-subtitle").text
            current_positions.append(subtitle)
            print(subtitle)  # This will print each position as it's found
        except:
            current_positions.append("No position found")
    
    # Print results
    print(f"Found {len(clean_profile_URLs)} profiles:")
    for url in clean_profile_URLs:
        print(url)

except Exception as e:
    print(f"An error occurred: {str(e)}")

finally:
    input("Press Enter to close the browser...")
    driver.quit()