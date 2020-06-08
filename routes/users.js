const router = require('express').Router();

const User = require('../model/User');

// VALIDATION
const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string().alphanum().min(4).required(),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required()
});



router.post('/register', async (req,res) => {
    // VALIDATE THE DATA BEFORE SAVING IT TO DB
    const validated = schema.validate(req.body);
    res.send(validated);
    console.log(req.body);
    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });

    // try{
    //     const savedUser = await user.save();
    //     res.send(savedUser);
    // }catch(err){
    //     res.status(400).send(err);
    // }
});


module.exports = router;