

const { Router } = require('express');
const express = require('express');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModule } = require('../model/User.model');


const loginRouter = Router();

loginRouter.post('/', async(req, res)=>{
   const {email, password} = req.body;

   const user = await UserModule.findOne({email});
   if(user){
    bcrypt.compare(password, user.password, function(err, result) {
        if(err){
            res.send({"msg": "Login Failed"});
        }else{

            const token = jwt.sign({user_id: user._id}, process.env.SECRETKEY);
            res.send({"msg": "Login Successfull", "token" :token});
        }
    });
   }

})


module.exports = {loginRouter};