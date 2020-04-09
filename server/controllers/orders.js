var mongoose = require('mongoose');
var Order = mongoose.model("Order")

module.exports = {

// Show all orders

    index: function (req, res) {
        Order.find({}, function (err, orders) {
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
    },

// Create an order

    create: function (req, res) {
        Order.create(req.body, function (err, orders) {
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
    },

// Delete an order

    destroy: function (req, res) {
        Order.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                console.log("Returned error", err);
                res.json({
                    message: "Error",
                    error: err
                })
            } else {
                res.json({
                    message: "Success"
                })
            }
        })
    }
};