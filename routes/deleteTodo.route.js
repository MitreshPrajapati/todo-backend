const { Router } = require('express');
const express = require('express');
const { authentication } = require('../middleware/authentication');
const { TodoModel } = require('../model/todo.model');

const deleteTodoRouter = Router();

deleteTodoRouter.post('/', authentication, async(req, res)=>{
    const {_id, user_id} = req.body;

    const reqPost = await TodoModel.findById(_id)
    if(reqPost.user_id === user_id){
        await TodoModel.deleteOne({_id});
        res.send({"msg": "Post deleted"});
    }else{
        res.send({"msg": "Error"});
    }    
})

module.exports = {deleteTodoRouter};