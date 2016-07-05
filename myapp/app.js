var express = require('express');
var app = express();
var books = require('./books')
app.use('/books', books)

// MIDDLEWARE FUNCTIONS

var myLogger = function (req, res, next) {
	console.log('LOGGED');
	next()
};

app.use(myLogger);


// FIRST TRY
app.get('/', function(req, res) {
	res.send('SEND request');
});

app.post('/', function(req, res) {
	res.send('POST request');
});

app.all('/secret', function(req, res, next) {
	console.log('Accessing secret area..');
	next();
}, function(req, res) {
	res.send('this is a secret')
});

app.route('/book')
	.get(function(req, res) {
		res.send('Get random Book');
	})
	.post(function(req, res) {
		res.send('Add a Book');
	})
	.put(function(req, res) {
		res.send('Update a Book');
	});

app.use('/user.:id', function (req, res, next) {
	console.log('Request URL:', req.orignalURL);
	next();
}, function (req, res, next) {
	console.log('Request Type:', req.method);
	next();
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});


