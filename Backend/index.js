const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./User')
const app = express()

app.use(express.json())
app.use(cors())

// uSED for auto-generated id
const usedIds = new Set();

// mongo db connection
mongoose.connect('mongodb+srv://qaviashraf:12345678Admin@nodeapi.iymng6r.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then((error) => {
        console.log("Connected to mongodb")
        app.listen(3001, () => {
            console.log("node api is running on port 3000")
        })

    }).catch(() => {
        console.log("error")
})

//Getting Order from mongodb API
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










// app.put('/user/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findByIdAndUpdate(id, req.body);
//         if (!user) {
//             return res.status(404).json({ message: `Cannot find any user with ID ${id}` })
//         }
//         const UpdateUser = await User.findById(id);
//         res.status(200).json(UpdateUser);
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({ message: error.message })
//     }
// })
// app.delete('/user/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findByIdAndDelete(id);
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({ message: error.message })
//     }
// })
// app.get('/user/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findById(id);
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({ message: error.message })
//     }
// })

// Add your Database link 