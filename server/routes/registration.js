const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/',(req,res)=>{
    User.find()
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.post('/', (req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const newUser = new User(username=username, password=password)

    newUser.save()
    .then((newUser)=>{
        res.json(newUser)
    })
    .catch((err)=>{
        res.status(400).json(`Error: ${err}`)
    })
})

module.exports = router