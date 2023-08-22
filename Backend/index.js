const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./User')
const app = express()
const Order = require('./order')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://qaviashraf:12345678Admin@nodeapi.iymng6r.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then((error) => {
        console.log("Connected to mongodb")
        app.listen(3001, () => {
            console.log("node api is running on port 3000")
        })

    }).catch(() => {
        console.log("error")
})

app.get('/createorder', async (req, res) => {
    try {
        const user = await Order.find({});
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

app.get('/user', async (req, res) => {
    try {
        const getUser = await User.find({});
        res.status(201).send(getUser);
    } catch (e) {
        res.status(404).send(e);
    }
})
// SignUp Routes
app.post('/user/check-email', async (req, res) => {
    const { email } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      res.json({ exists: !!existingUser });
    } catch (error) {
      console.error('Error checking email:', error);
      res.status(500).json({ error: 'An error occurred while checking email.' });
    }
  });
app.post('/user', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await User.create({
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            orders: [],
        });
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})
// Login Route
app.post("/login",(req,res) => {
  const {email,password} = req.body;
  User.findOne({email: email})
  .then(user => {
      if(user.password === password){
          res.json({status:"Success",userId: user._id })
      }else {
          res.json("Error")
      }
  })
})

app.get('/user/:id', async (req, res) => {
  try {
      const userId = req.params.id;
      const user = await User.findById(userId).exec();

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});

// Create an order for a user Temporary Route
app.post('/users/:userId/orders', async (req, res) => {
  try {
    const userId = req.params.userId;
    const orderData = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.orders.push(orderData);
    await user.save();
    res.status(201).json({ message: 'Order added successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//Order Post request
app.post('/createorder', async (req, res) => {
    try{
        const addOrder = new Order(req.body);
        const insertOrder = await addOrder.save();
        res.status(201).send(insertOrder)
    }catch(e){
        res.status(400).send(e)
    }
})

// Delete Request 
// app.delete('/createorder/:order_id', async (req, res) => {
//     try {
//         const OrderId = parseInt(req.params.order_id);
//         const getOrder = await Order.findOneAndDelete({order_id: OrderId });
//         res.send(getOrder);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// })
// Delete Request Delete Order 
app.post('/deleteorder', async (req, res) => {
    try {
      const orderId = req.body.order_id;
      const deletedOrder = await Order.findOneAndDelete({ order_id: orderId }, {new: true});
      if (deletedOrder) {
        res.status(200).send('Order deleted successfully');
      } else {
        res.status(404).send('Order not found');
      }
    } catch (e) {
      console.error(e);
    }
  });


