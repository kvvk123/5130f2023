# CoinCount

## Project Concept

CoinCount is designed as an intuitive and all-encompassing financial management tool suitable for individuals and small businesses. Its primary goal is to ease the process of tracking expenses and income, coupled with providing insightful analytics via an interactive dashboard. This platform facilitates the recording and categorization of expenses, management of various income streams, and offers reminders for important financial deadlines. Overall, CoinCount is aimed at enhancing financial literacy and assisting users in achieving their financial objectives.

## Progress Reports

### Last Week Progress

Our team established a connection with Amazon Elastic Compute Cloud (EC2), utilizing its cloud-based server capabilities for enhanced performance. We configured a MySQL instance and integrated our website with the cloud server, enabling effective user data storage and management. The implementation of the Login/Signup feature now allows for secure user data storage and authentication. However, continuous server operation is limited under AWS's free tier, necessitating interval-based testing and documentation through screenshots.

#### 1. User Authentication and Data Storage
- We've improved the login and signup pages to ensure secure user authentication.
- Users' details are now securely stored in the database, allowing for personalized tracking.

#### 2. Navigation
- A personalized welcome message displaying the user's username is now added post-login.
- The dashboard navigation is enhanced with dedicated sections for Expenses, Incomes, and Logout options.

#### 3. Expenses Management
- A detailed form for logging expenses, including title, amount, date, and category, has been developed.
- The total expense amount is instantly updated with each new entry, although a page refresh is needed for reflecting deletions.

#### 4. Income Tracking
- We've created a comprehensive form for income recording, featuring title, amount, date, and category fields.
- A 'Reference/Note' section is included for additional income details.
- The total income is immediately updated with new entries, but like expenses, requires a refresh for deletions.

#### 5. Database
- The database structure is optimized for more efficient management of expenses and income data.
- We've ensured a seamless logout process, maintaining consistent data availability for returning users.
- Our team has implemented secure and efficient data retrieval and update queries.

### Week 5 Progress

#### Dashboard Enhancement and Dynamic Graphs
- This week, we enhanced the Dashboard functionality significantly. When users update their profiles by adding expenses or incomes, these changes are immediately reflected in a dynamic graph on the dashboard.
- This graph provides a real-time, comprehensive view of the user's total expenses, income, and savings, updating interactively as new data is entered. This feature offers users an immediate and visual understanding of their financial situation.

