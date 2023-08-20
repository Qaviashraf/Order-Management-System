const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./User')
const app = express()

app.use(express.json())
app.use(cors())






// app.get('/user', async (req, res) => {
//     try {
//         const user = await User.find({});
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({ message: error.message })
//     }
// })
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
mongoose.connect('mongodb+srv://qaviashraf:12345678Admin@nodeapi.iymng6r.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then((error) => {
        console.log("Connected to mongodb")
        app.listen(3001, () => {
            console.log("node api is running on port 3000")
        })

    }).catch(() => {
        console.log("error")
    })