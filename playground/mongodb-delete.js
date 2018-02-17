const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   
     if(err) {
         return console.log('Unable to connect to Mongodb server.');
     }

    console.log('Connected to Mongodb server.');
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat dinner'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //first challenge
    // db.collection('Users').deleteMany({name: 'Pras'}).then((result) => {
    //     console.log(result);
    // });

    //second challenge
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a8807e2efa430060067add2')
    }).then((result) => {
        console.log(result);
    });

    //db.close();

});