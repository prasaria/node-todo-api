const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   
     if(err) {
         return console.log('Unable to connect to Mongodb server.');
     }

    console.log('Connected to Mongodb server.');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a880ab1fd62a23f9a9d55b7')
    // }).toArray().then((docs) => {
      
    //     console.log('Todos : ');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count} `);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Pras'}).toArray().then((docs) => {
        console.log('Users: ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    //db.close();

});