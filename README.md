# travel-agency-restAPI-nodejs
This project will create REST API's for a travel agency and will use mysql to simulate a server.


## How to use:
1. First step:
   - Install [node.js](https://nodejs.org/en/download)
   - Install [mysql](https://dev.mysql.com/downloads/) and set an account.

2. Second step:
   -  Start a project in your developing environment (like [VisualStudioCode](https://code.visualstudio.com/download))
   - Clone the repository in the project folder and insert in the terminal (in project directory): "npm init -y" to create a package.json file and start your node.js project
   - Install dependencies: in the terminal insert "npm i express mysql nodemon"

3. Third step:
   - Open a new terminal and insert the following to access to your mysql:
    1) mysql -u root -p
    2) YOUR_PASSWORD
   - Create the database from database.sql:
    3) SOURCE your/database.sql/path

4. Fourth step:
   - In  the "server.js" file insert your personal mysql password in the mysql configuration.
   - You are now ready to test the API's !!!
   - For the testing part i recommend using [Postman](https://www.postman.com/downloads/)

5. Testing:
   - Open the terminal and go to your project folder
   - Now insert "nodemon server" (from server.js file) and test the API's on Postman.
  

## Database details:

The orizon database has 3 tables:
1. user (clients): id, first_name, surname, email
2. product (what the travel agency offers): id, product_name
3. orders (what customers buy): id, customer_id,customer_name,customer_surname,customer_email,product

* Remember to send POST requests first (for users,products and orders) because your database will be empty.
* Even if an order has multiple clients you can olny add (POST) one at a time.(Make sure that order_id is the same for orders with multiple clients)
