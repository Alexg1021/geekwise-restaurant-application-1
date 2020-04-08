const express = require('express');
const app = express();
const server = app.listen(4200);
var path = require("path");
var bodyParser = require('body-parser');
const flash = require('express-flash')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/orders', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public/dist/public'));
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

var OrderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    qty: {
        type: Number
    },
}, {
    timestamps: true
})
mongoose.model('Order', OrderSchema);
var Order = mongoose.model('Order');

// ========================== 
// Route to show all oders
// ========================== 

app.get('/view', (req, res) => {
    Order.find({}, (err, orders) => {
        if (err) {
            console.log("returned error", err);
            res.json({
                message: "error",
                error: err
            })
        } else {
            res.json({
                message: "success",
                data: orders
            })
        }
    })
})

// ========================== 
// Route to add to oder
// ========================== 

app.post('/add', (req, res) => {
    Order.create(req.body, (err, orders) => {
        if (err) {
            console.log("returned error", err);
            res.json({
                message: "error",
                error: err
            })
        } else {
            res.json({
                message: "success",
                data: orders
            })
        }
    })
})

// ========================== 
// Route to delete to oder
// ========================== 

app.delete('/view/:id', (req, res) => {
    Order.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log("Returned error", err);
            // respond with JSON
            res.json({
                message: "Error",
                error: err
            })
        } else {
            // respond with JSON
            res.json({
                message: "Success"
            })
        }
    })
})


// ========================== 
// 404 re-routing
// ========================== 
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});