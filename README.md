# geekwise-restaurant-application

## How to Start App

Within your terminal navigate to the public folder 

Run `npm install` 

(For the next 2 steps make sure to fix any stated vulnerabiites using the suggested `npm audit fix` command. Avoid using `npm audit fix --force`) 

Run `npm i --save-dev @angular/compiler-cli` 

Run `npm i @angular-devkit/build-angular@0.803.24` 

Next run `ng build --watch` to create the dist folder

Open up an additional terminal window and navigate to the main folder containing the `server.js` file 

Run `nodemon server.js` to start the server. 

Go to `http://localhost:4200/`

## Video Demos 

desktop: https://www.youtube.com/watch?v=MYKL3O6Tv_s

mobile: https://www.youtube.com/watch?v=dFGyvJUwTQ4

