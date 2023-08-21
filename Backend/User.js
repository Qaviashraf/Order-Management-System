const mongoose = require('mongoose')

// const orderSchema = new mongoose.Schema({
//     order_id: String,
//     customer_name: String,
//     mobile_number: String,
//     email: String,
//     address: String,
//     category: String,
//     product: String,
//     status: String,
//     deliveryDate: Date,
// });

const userSchema = new mongoose.Schema({
    // id: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    orders: [],
},
{
    versionKey: false
},
);



const User = mongoose.model('User', userSchema);
module.exports = User