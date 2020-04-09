var path = require("path");
var orders = require("../controllers/orders.js");

const mongoose = require('mongoose'),
    Order = mongoose.model('Order')
module.exports = (app) => {

    // Route to show all oders
    app.get('/view', orders.index);

    // Route to add to oder
    app.post('/add', orders.create);

    // Route to delete to oder
    app.delete('/view/:id', orders.destroy);

    // 404 re-routing
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}

