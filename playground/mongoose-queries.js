const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a890708d893fbd013a388b8';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// } else {
//     Todo.findById(id).then((todo) => {
//         if(!todo){
//             return console.log('ID not found');
//         }
   
//        console.log('todobyID: ', todo);
//    }).catch((e) => console.log(e));
// }

// Todo.find({
//    _id: id
// }).then((todos)=> {
//     console.log('todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=> {
//     console.log('todo', todo);
// });

var userID = '5a884b6bdb6a317818c18199';

if(!ObjectID.isValid(userID)){
    console.log('User ID not valid');
}else {

   User.findById(userID).then((user) => {
     if(!user){
         return console.log('User not found');
     }
     
     console.log('User by ID,', user);

   }).catch((e) => console.log(e));

}

