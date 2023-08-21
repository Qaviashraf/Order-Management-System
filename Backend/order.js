const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_id: Number,
    customer_name: String,
    mobile_number: String,
    email: String,
    address: String,
    product: String,
    status: String,
    delivery_date: Date
});

const Order = mongoose.model('Order', orderSchema)
module.exports = Order;