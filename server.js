const express = require('express');
const app = express();
const server = app.listen(9000);
const io = require('socket.io')(server);
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
const flash = require('express-flash')

// var mongoose = require('mongoose');



// mongoose.connect('mongodb://localhost/product', {
//     useNewUrlParser: true
// });
// mongoose.Promise = global.Promise;

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(flash());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: "Over 9000!",
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 60000
    }
}))





// ========================== 
// Schemas
// ========================== 






// ========================== 
// Routes
// ========================== 

app.get('/', (req, res) => {
   
})




app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });