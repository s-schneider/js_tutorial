var express = require('express');
var app = express();

var login = require('./lib/login')
var signup = require('./lib/signup')
var userList = require('./lib/user_list')

app.use(login);
app.use(signup);
app.use(userList);


app.listen(3000);
console.log('listening on port 3000')
