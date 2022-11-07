
const { Router } = require('express');
const express = require('express');
require('dotenv').config();
const bcrypt = require('bcrypt');
const { UserModule } = require('../model/User.model');

const signupRouter = Router();

signupRouter.post('/', async(req, res)=>{
    const {email, password} = req.body;

    const isPresent = await UserModule.findOne({email});

    if(isPresent){
        res.send({"msg": "User already exists, Please Login."})
    }else{

        bcrypt.hash(password, 3, async (err, hashedPassword)=>{
            if(err){
                res.send({"msg": "Something went wrond, Please try later."})
            }
                console.log(email, password, hashedPassword)
                const new_user = new UserModule({
                    email, 
                    password : hashedPassword
                })
                await new_user.save();
                res.send({"msg": "Signup Successfull."})
            
            
        });
    }
})


module.exports = {signupRouter};