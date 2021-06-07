const mongoose = require("mongoose")
const Schema = mongoose.Schema

const newUser = new Schema({
    username: String,
    password: String,
    
})