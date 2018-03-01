const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'jakarta123';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$Zg4KrKrfgsgcTBTt7iL7VOwe11Lq0lrehBChXD9wi5lvkqOLoOqHW';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var data = {
//     id: 10
// }

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'I am the biggest Man Utd fan in the world';

// var hash = SHA256(message).toString();

// console.log(`Message : ${message}`);
// console.log(`Encrypted Message : ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if(resultHash === token.hash)
// {
//     console.log('Data is secure, not breached');
// }else{
//     console.log('Data is changed, not secure !');
// }

