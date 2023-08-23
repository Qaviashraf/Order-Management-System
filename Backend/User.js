const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    order_id: String,
    customer_name: String,
    mobile_number: String,
    email: String,
    address: String,
    product: String,
    status: String,
    delivery_date: Date
});

const userSchema = new mongoose.Schema({
    // id: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    orders: [orderSchema],
},
{
    versionKey: false
},
);



const User = mongoose.model('User', userSchema);
// const Order = mongoose.model('Order', orderSchema)

module.exports = User