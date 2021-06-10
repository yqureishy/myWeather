const express = require('express')
const app = express()
const router = express.Router()
let User = require('../models/user')
const bodyParser = require('body-parser')


app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



router.get('/',(req,res)=>{
    User.find()
    .then((users)=>{res.json(users)})
    .catch((err)=>{res.send(err)})
})

router.post('/',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;


    const user = new User({
        username: username, 
        password: password
    });

    user.save()
    .then(()=>{res.json('User Added!')})
    .catch((err)=>{res.status(400).json(`Error: ${err}`)})
})

module.exports = router