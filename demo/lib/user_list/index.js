var express = require('express');
var app = module.exports = express()
var users = require('../users')


app.get('/user_list', function(req, res){
	users.all(function(err,users){
		res.send(users);
	})
});
