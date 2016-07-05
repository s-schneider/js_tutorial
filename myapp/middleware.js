var express = require('express');
var app = express();

app.use(function (req, res, next) {
	console.log('Time: ', Date.now());
});

// app.use('/user/:id', function (req, res, next) {
// 	console.log('Request Type:', req.method);
// 	next();
// });

// app.get('/user/:id', function (req, res, next) {
// 	res.send('USER');
// });

app.get('/', function(req, res) {
	res.send('SEND request');
});

// app.use('/user.:id', function (req, res, next) {
// 	console.log('Request URL:', req.orignalURL);
// 	next();
// }, function (req, res, next) {
// 	console.log('Request Type:', req.method);
// 	next();
// });


app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});