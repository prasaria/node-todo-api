const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   
     if(err) {
         return console.log('Unable to connect to Mongodb server.');
     }

    console.log('Connected to Mongodb server.');
    
    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a8834ebfd62a23f9a9d5904')
    // }, {
    //     $set: {
    //         completed: true
    //     }  
    // }, {
    //     returnOriginal: false
    // }
    // ).then((result) => {
    //     console.log(result);
    // });

    //challenge
    db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5a88076de890240da8cb8d56')
    }, {
        $set: {
            name: 'Michael'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
       console.log(result);
    });

    //db.close();

});