const { Router } = require('express');
const express = require('express');
const { authentication } = require('../middleware/authentication');
const { TodoModel } = require('../model/todo.model');

const pofileRouter = Router();


profileRouter.get('/', authentication, async(req, res)=>{
   const {user_id} = req.body;

   const allTodos = await TodoModel.find({user_id});
   res.send({allTodos});
})


module.exports = {pofileRouter};