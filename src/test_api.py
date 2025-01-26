import requests
import json

def test_linkedin_search_api():
    # API endpoint
    url = 'http://localhost:5000/api/linkedin-search'
    
    # Test data
    test_data = {
        "job": "Engineer",
        "company": "Google"
    }
    
    # Headers
    headers = {
        'Content-Type': 'application/json'
    }
    
    try:
        # Make the POST request
        print("Sending request with data:", test_data)
        response = requests.post(url, json=test_data, headers=headers)
        
        # Print the response status code
        print("\nResponse Status Code:", response.status_code)
        
        # Print the response headers
        print("\nResponse Headers:", dict(response.headers))
        
        # Try to get the JSON response
        try:
            response_data = response.json()
            print("\nResponse Data:", json.dumps(response_data, indent=2))
        except json.JSONDecodeError:
            print("\nRaw Response:", response.text)
            
    except requests.exceptions.RequestException as e:
        print("Error making request:", e)

if __name__ == "__main__":
    test_linkedin_search_api()