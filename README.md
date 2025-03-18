# LinkedIt:  Making Connections Easier - one link at a time 

## 🎉 Winner of Geesehacks 2024 Best Beginner Hack! 🎉

![alt text](https://github.com/kevinli5371/LinkedIt/blob/main/src/assets/homepage.png)

## 💡 Inspiration
After experiencing the toils that sponsorship teams must go through to find and contact sponsors, we wanted to find a way to make this process more efficient. This process includes searching LinkedIn company pages and filtering for positions, then scrolling through multiple profiles in pursuit of a personal email to contact. While firsthand experience with searching sponsors was our main identified problem, we realized this search for connections was generally arduous for most individuals. Thus, to streamline this LinkedIn problem, we created LinkedIt.

## 🚀 What it does
LinkedIt allows users to input two simple search terms, returning profiles from LinkedIn that match. This includes the profile name as well as the contact's headline, and most importantly, a quick access to their email. We reduce the time it takes for users to input fields themselves multiple times, and the scrolling for LinkedIn profiles.

## 🛠 How we built it

### Frontend:
- Built using **React** and **Tailwind CSS** for a clean user interface
- Visualized using **Figma**

### Backend:
- **Flask** and **Axios** were used to create our API and host our local server
- **Selenium** to scrape the web for LinkedIn profiles

## 💢 Challenges we ran into
On the frontend, we faced some challenges when it came to integrating the different components that came with our Figma UI visualization. There were a few times where div and flex components would not set properly. Our greatest issue was creating dynamic movement with our components, where our animation was jerky and too sudden.

We also found out early on about the difficulties that came with implementing the LinkedIn API with our program: it didn't fulfill our goals. We were unable to access key features that we needed for implementation. Thus, we coded our own API to allow these features. This included using Selenium, merging our back-end to our front-end code using Flask and Axios, as well as making sure our calls from the API was working and appearing on the UI. Each step of the backend development was a consistently re-iterated upon, having gone through multiple trials and tests.

## ❓ What's next for LinkedIt
- Challenging ourselves to implement an **automated email system**
- Creating and maintaining a secure database to store emails and LinkedIn profiles
- Ensuring constant engagement by rewarding active connectors/sponsors

### Demo: https://www.youtube.com/watch?v=2oPLkAotjng
