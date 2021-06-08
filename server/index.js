const express = require("express")
const app = express()
const cors = require("cors")
const User = require("./models/user")
const PORT = 3000
const mongoose = require("mongoose")
app.use(cors())
// Connect to MongoDB
const dbURI = 'mongodb+srv://yqureishy:younusq@cluster0.c3huk.mongodb.net/my_Weather?retryWrites=true&w=majority'





mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>console.log('database connected')).catch((err)=>console.log(err))


//creating an instance of the User model

app.get('/add-user',(req,res)=>{
    const user = new User ({
        username: 'Younus Qureishy',
        password: 'Qureishy123'
    })

    user.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
        res.send("Sorry, user could not be saved")
    })
})

app.get('/all-users', (req,res)=>{
    User.find()
    .then((result)=>{
        res.send(result)
        console.log("Results have been printed")
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/single-user',(req,res)=>{
    User.findById('60bfd954f319ef8cee292f93')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
})

app.get('/delete-user',(req,res)=>{
    User.findByIdAndDelete('60bfd954f319ef8cee292f93')
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})









app.listen(PORT, ()=>{
    console.log("Server is running on Port:" + PORT)
})