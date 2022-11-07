
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { connection } = require('./config/db');
const { addTodoRouter } = require('./routes/addTodo.route');
const { deleteTodoRouter } = require('./routes/deleteTodo.route');
const { editTodoRouter } = require('./routes/editTodo.route');
const { loginRouter } = require('./routes/login.route');
const { signupRouter } = require('./routes/signup.route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/addTodo', addTodoRouter);
app.use('/editTodo', editTodoRouter);
app.use('/delteTodo', deleteTodoRouter);


app.get('/', (req, res)=>{
    res.send("Welcome to Todo App");
});

const PORT = process.env.PORT || 8700;

app.listen(PORT, async()=>{
   try{
    await connection;
    console.log("Connecting to DB successfull");
   }catch(err){
     console.log("Not connecting to DB");
     console.log(err);
   }
})