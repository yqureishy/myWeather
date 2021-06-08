const mongoose = require("mongoose")


// creating a newUser schema
const newUserSchema = new mongoose.Schema({
    username: String,
    password: String,

})

// First parameter should be singular notion of collection name
// Second parameter is the schema that the model is based on
const User = mongoose.model('User', newUserSchema)

//Now we want to export this model
module.exports = User