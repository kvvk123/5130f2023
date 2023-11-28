# CoinCount

## Project Concept

CoinCount aims to provide a user-friendly and comprehensive financial management tool for individuals and small businesses. The platform is designed to simplify the tracking of expenses and income, offering insightful analytics through an interactive dashboard, and promoting financial literacy. It allows users to effortlessly record and categorize expenses, oversee various income streams, and get reminders for critical financial deadlines, ultimately facilitating sound financial management and assisting in achieving financial goals.

## Progress Reports

### Last Week Progress

Our team connected to Amazon Elastic Compute Cloud (EC2) to leverage cloud-based server capabilities. After setting up a MySQL instance and configuring the necessary components, we linked our website files to the server. The site is now hosted on a cloud server, capable of storing user data in a database. The Login/Signup feature was successfully implemented, allowing for user data storage and authentication. However, continuous server running is limited due to AWS's free tier restrictions, so testing is conducted in intervals, and screenshots are used to document progress.

### Week 4 Progress

#### 1. User Authentication and Data Storage
- Enhanced login and signup pages with secure user authentication.
- User details are now safely stored in the database, facilitating individual tracking.

#### 2. Navigation
- Added a personalized welcome message that displays the user's username after login.
- Improved dashboard navigation with categories for Expenses, Incomes, and Logout.

#### 3. Expenses Management
- Developed a form for users to log expenses with essential details like title, amount, date, and category.
- The total expense amount is updated instantly upon adding a new entry.
- Note: A refresh is currently required to update the total after deleting an expense.

#### 4. Income Tracking
- Formulated a form for recording income, complete with fields for title, amount, date, and category.
- Incorporated a 'Reference/Note' field for additional details about the income.
- The total income amount is updated immediately upon entry addition.
- Note: A refresh is necessary to reflect the new total after an income entry is removed.

#### 5. Database
- Optimized the database structure to handle user data for expenses and incomes more effectively.
- Ensured a smooth logout process with consistent user data availability upon re-login.
- Implemented secure and efficient queries for data retrieval and updates.

### Looking Ahead

- Our focus will shift towards creating an advanced dashboard that includes graphical representations of incomes and expenses.
- We aim to provide an intuitive visual breakdown of financial activities to support better financial management and planning.