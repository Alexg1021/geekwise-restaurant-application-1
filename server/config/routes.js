var path = require("path");
var orders = require("../controllers/orders.js");

const mongoose = require('mongoose'),
    Order = mongoose.model('Order')
module.exports = (app) => {

    // Route to show all orders
    app.get('/view', orders.index);

    // Route to add order
    app.post('/add', orders.create);

    // Route to delete order
    app.delete('/view/:id', orders.destroy);

    // 404 re-routing
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}