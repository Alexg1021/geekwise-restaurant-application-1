const express = require('express');
const app = express();
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
const flash = require('express-flash')
const server = app.listen(4200);

app.use(express.static(__dirname + '/public/dist/public'));
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

// Database Models 

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orders', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.Promise = global.Promise;
require("./server/config/mongoose.js");

// Routes

require('./server/config/routes.js')(app)