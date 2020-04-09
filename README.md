# Geekwise Restaurant Application

## How to Start App

Download the zip file and unzip

Within your terminal navigate into the public folder of the unziped file

Run `npm install` 

(For the next 2 steps make sure to fix any stated vulnerabiites using the suggested `npm audit fix` command. Avoid using `npm audit fix --force`) 

Run `npm i --save-dev @angular/compiler-cli` 

Run `npm i @angular-devkit/build-angular@0.803.24` 

Next run `ng build --watch` to create the dist folder

Open up an additional terminal window and navigate to the main project folder containing the `server.js` file 

Run `nodemon server.js` to start the server

Go to `http://localhost:4200/`

## Video Demos 

mobile: https://youtu.be/Nb8JfEjyUfs

desktop: https://youtu.be/TbNrBRyb4dQ

## Questions 

`Why did you decide on the framework choice you used as part of your solution?`

  - I chose to use Angular to create this web app because I have more experience building CRUD apps with it and wanted to show my             skills to my full potential 

`Are there any improvements you could make to your submission?`
  
  - A working login
  
  - More work on the frontend and styling
  
  - Fix the date/time presentation
  
`What would you do differently if you were given more time?`

  - I would create/implement a user registration and login api with validations and password hashing

  - Track users using session to make content more dynamic and custom to the user

  - Add the functionality to edit an order
  
  - Add the funtionality to create/delete a food item 

  - Deploy the app with aws or heroku

