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

Run `nodemon server.js` to start the server. 

Go to `http://localhost:4200/`

## Video Demos 

desktop: https://www.youtube.com/watch?v=MYKL3O6Tv_s

mobile: https://www.youtube.com/watch?v=dFGyvJUwTQ4

## Questions 

`Why did you decide on the framework choice you used as part of your solution?`

  I chose to use Angular to create this web app because I have a lot more experience building CRUD apps with it and wanted to show my       skills to the fullest potential. 

`Are there any improvements you could make to your submission?`

  I would have worked more on the front end side of things making it more visually pleasing and function better. Adding more styling         elements and quality of life changes. Fix the date and time presentation. 

`What would you do differently if you were given more time?`

  I would create/implement a user registration and login api with validations and password hashing. 

  Track users using session to make content more dynamic and custom to the user. 

  Add the functionality to edit an order. 
  
  Add the funtionality to create/delete a new food item 

  Deploy the app using aws or heroku 

