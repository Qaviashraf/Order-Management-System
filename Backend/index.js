const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./User')
const app = express()

app.use(express.json())
app.use(cors(
  {
    origin: ["https://order-management-system-zeta.vercel.app"],
    methods: ["Get", "Post", "PUT", "DELETE"],
    credentials: true
  }
))

// Used for auto-generated id
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


  app.get('/', (req,res)=>{
    res.json("Backend Deployed");
})

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
// SignUp Routes
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
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then(user => {
      if (user.password === password) {
        res.json({ status: "Success", userId: user._id })
      } else {
        res.json("Error")
      }
    })
})
// Get User By ID
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

// Create an order for a user
//function for generate auto Id
function generateId(name) {
  const digits = '0123456789';
  let orderId;
  let startingchar = name.charAt(0).toUpperCase();
  do {
    const randomDigits = Array.from({ length: 3 }, () => digits[Math.floor(Math.random() * digits.length)]).join('');
    orderId = startingchar + randomDigits;
  } while (usedIds.has(orderId));
  usedIds.add(orderId);
  return orderId;
}
app.post('/users/:userId/orders', async (req, res) => {
  try {
    const _id = req.params.userId;
    const orderData = req.body;
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    //Auto Generate Id based on Product Name First Character
    const orderId = generateId(orderData.product);
    orderData.order_id = orderId
    user.orders.push(orderData);
    await user.save();
    res.status(201).json({ message: 'Order added successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Update the order
app.put('/users/:userId/orders/:orderId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const orderId = req.params.orderId;
    const orderData = req.body;

    // console.log(orderData);
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const orderToUpdate = user.orders.find(order => order.order_id.toString() === orderId)

    if (!orderToUpdate) {
      return res.status(404).json({ message: 'Order not found' });
    }
    Object.assign(orderToUpdate, orderData)
    await user.save();
    res.status(200).json({ message: 'Order updated successfully', user });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
})

// Delete the order 
// DELETE route to handle order deletion by order_id
app.delete('/users/:userId/orders/:order_id', async (req, res) => {
  try {
    const userId = req.params.userId;
    const orderIdToDelete = req.params.order_id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const orderIndexToDelete = user.orders.findIndex(order => order.order_id.toString() === orderIdToDelete);
    if (orderIndexToDelete === -1) {
      return res.status(404).json({ message: 'Order not found' });
    }
    user.orders.splice(orderIndexToDelete, 1);
    await user.save();
    res.status(200).json({ message: 'Order deleted successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Route to update user information
app.put('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;

    const userToUpdate = await User.findByIdAndUpdate(userId, userData);

    if (!userToUpdate) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: userToUpdate });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});
