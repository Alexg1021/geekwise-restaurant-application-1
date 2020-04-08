const express = require('express');
const app = express();
const server = app.listen(9000);
var path = require("path");
var bodyParser = require('body-parser');
const flash = require('express-flash')

var mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/orders', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(flash());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));







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