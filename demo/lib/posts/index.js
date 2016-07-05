var express = require('express');
var app = module.exports = express()

app.get('/posts', function(req, res){
	res.send('list of posts');
});