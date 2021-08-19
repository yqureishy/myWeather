// Database connected via younusqureishy@hotmail.com

const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
app.use(express.urlencoded({ extended: false }))
// requiring router file
const registerRouter = require('./routes/registrationRoute')
require('dotenv').config({ path: __dirname + '/config/.env' })



const User = require('./models/user')
const PORT = process.env.PORT || 5000
// cross origin resource sharing
app.use(cors())
// Connect to MongoDB via URI (Uniform Resource Identifier)

dbURI = process.env.dbURI_Atlas
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('database connected'))
    .catch((err) => console.log(err))

// using router file
app.use('/registration', registerRouter)

// home route
app.get('/', (req, res) => {
    res.render()
})

















app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT)
})










//creating an instance of the User model

// app.get('/add-user',(req,res)=>{
//     const user = new User ({
//         username: 'Younus Qureishy',
//         password: 'Qureishy123'
//     })

//     user.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//         res.send("Sorry, user could not be saved")
//     })
// })

// app.get('/all-users', (req,res)=>{
//     User.find()
//     .then((result)=>{
//         res.send(result)
//         console.log("Results have been printed")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

// app.get('/single-user',(req,res)=>{
//     User.findById('60bfd954f319ef8cee292f93')
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })

// app.get('/delete-user',(req,res)=>{
//     User.findByIdAndDelete('60bfd954f319ef8cee292f93')
//     .then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
