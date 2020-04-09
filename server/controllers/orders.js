var mongoose = require('mongoose');
var Order = mongoose.model("Order")

module.exports = {

    // Show all orders

    index: (req, res) => {
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
    },

    // Create an order

    create: (req, res) => {
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
    },

    // Delete an order

    destroy: (req, res) => {
        Order.findByIdAndRemove(req.params.id, (err) => {
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