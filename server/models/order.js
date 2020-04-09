// Database Models/Schemas

var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Make a Selection"]
    },
    qty: {
        type: Number,
        required: [true, "Please Select a Qty"]
    },
}, {
    timestamps: true
})
mongoose.model('Order', OrderSchema);
var Order = mongoose.model('Order');