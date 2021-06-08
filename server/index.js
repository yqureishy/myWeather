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










app.listen(PORT, ()=>{
    console.log("Server is running on Port:" + PORT)
})