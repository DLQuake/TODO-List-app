# TODO-List-app

A web application enabling the creation and management of a to-do list.

## Table of Contents
 * [Brief repository description](#brief-repository-description)
 * [Technologies used in the project](#technologies-used-in-the-project)
 * [Application concept](#application-concept)
 * [Downloading and cloning](#downloading-and-cloning)
 * [User guide](#user-guide)

## Brief repository description
This repository contains a web application that allows the user to create tasks, manage them, and delete them. To access these features, the user needs to create an account in the application and then log in.

## Technologies used in the project

- Front-end: [React.js](https://reactjs.org/)
- Back-end: [Express.js](http://expressjs.com/)
- Bazy danych: [MySQL](https://www.mysql.com/)

## Application concept
The purpose of the application is to allow the user to create and manage a to-do list in an intuitive and user-friendly way. All tasks are stored in the database, which allows for their permanent storage and easy retrieval after restarting the application.

Any changes made by the user are immediately saved in the database, ensuring the current and consistent state of data. The application is designed in a modular way, which allows for easy addition of new functionalities and modification of existing ones.

## Downloading and Cloning
The repository can be downloaded in two ways:

* ```
  git clone https://github.com/DLQuake/TODO-List-app.git
  ```
* [Download ZIP](https://github.com/DLQuake/TODO-List-app/archive/refs/heads/main.zip)

## User Guide

- ### Creating the database
    The user needs to create a MySQL database. It is recommended to use the [XAMPP](https://www.apachefriends.org/) package for this purpose.

- ### Creating .env file
    In the project folder, create an .env file and then paste the following code

    ```javascript
    APP_PORT = 5000
    SESSION_SECRET = 78564dhakjdhkahdkhawkdhkwahdkwah456dajlkdjlwaj
    ```

- ### Running the backend
    1. In the project folder, navigate to the backend folder

        ```bash
        cd backend/
        ```

    2. Install the required dependencies

        ```bash
        npm install
        ```

    3. Configure the database by going to the backend/config/Database.js file and changing the following values

        ```javascript
        import { Sequelize } from "sequelize";

        const db = new Sequelize('Database name', 'user', 'password', {
            host: "host",
            dialect: "mysql"
        });

        export default db;
        ```

    4. Run the backend

        First, in the index.js file, uncomment lines 20, 21, 22, and 43

        ```bash
        node index.js
        ```

        Optionally, you can use the "nodemon" module

        ```bash
        npm install -g nodemon
        nodemon index
        ```

        After running the backend, comment out lines 20, 21, 22, and 43 in the index.js file.


- ### Running the frontend

    1. In the project folder, navigate to the frontend folder

        ```bash
        cd frontend/
        ```
    2. Install the required dependencies

        ```bash
        npm install
        ```

    3. Run the application

        ```bash
        npm start
        ```