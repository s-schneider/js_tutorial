var express= require('express');
var app    = module.exports = express()
var users  = require('../users')

app.set('views', __dirname);
app.set('view engine', 'jade');
// app.get('/user_list', function(req, res){
// 	 function sendusers (err,users){
// 		res.send(users);
// 	}
// 	users.all(sendusers);
// });

app.get('/user_list', function(req, res){
	 function sendusers (err,users){
	 	console.log(users);
		res.render('form', {
			userlist: users
		});
	}
	users.all(sendusers);
});

