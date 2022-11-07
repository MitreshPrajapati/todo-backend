const { Router } = require('express');
const express = require('express');
const { authentication } = require('../middleware/authentication');
const { TodoModel } = require('../model/todo.model');

const addTodoRouter = Router();

addTodoRouter.post('/', authentication, async(req, res)=>{
    const {title, status, tag, user_id} = req.body;
    
    const new_todo = new TodoModel({
        title,
        status,
        tag,
        user_id
    })
   await new_todo.save();
    res.send({"msg": "Todo added."});
})

module.exports = {addTodoRouter};