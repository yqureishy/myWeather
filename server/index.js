const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 3000
const mongoose = require("mongoose")
app.use(cors())






mongoose.connect("mongodb+srv://cluster0.c3huk.mongodb.net/myFirstDatabase", {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>console.log('database connected')).catch((err)=>console.log(err))

app.listen(PORT, ()=>{
    console.log("Server is running on Port:" + PORT)
})