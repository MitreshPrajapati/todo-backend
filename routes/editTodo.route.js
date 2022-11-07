const { Router } = require('express');
const express = require('express');
const { authentication } = require('../middleware/authentication');
const { TodoModel } = require('../model/todo.model');

const editTodoRouter = Router();

editTodoRouter.post('/', authentication, async(req, res)=>{
    const {_id,user_id} = req.body;
    const reqPost = await TodoModel.findOne({_id, user_id});
    if(reqPost){
        const post = await TodoModel.updateOne({_id}, {title, tag, status});
        res.send({"msg": "Post updated"});
    }else{
        res.send({"msg": "Post not found"});
    }
})

module.exports = {editTodoRouter};