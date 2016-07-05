var express= require('express');
var app    = module.exports = express()
var users     = require('../users')
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('views', __dirname);
app.set('view engine', 'jade');

function renderform (req, res){
	res.render('form');
}


app.get('/signup', renderform);


function createuser (req, res){
	// console.log(req.body);
	
	users.create(req.body);

	res.json({
		message: 'success'
	});
}

app.post('/signup', createuser);
