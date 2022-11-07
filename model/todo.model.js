
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    "title" : {type: String, required: true},
    "status": {type: String, enum:["pending", "done"], default:"pending", "required": true},
    "tag": {type: String, enum:["personal", "official", "family"], "default":"personal", required: true}
})

const TodoModel = mongoose.model('todo', todoSchema);

module.exports = {TodoModel};
