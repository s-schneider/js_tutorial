// var express = require('express');
// var app = module.exports = express()

// app.get('/users', function(req, res){
// 	res.send('list of users');
// });

// exports.all = function(fn){
// 	fn(null, [
// 		{ name: 'Simon '},
// 		{ name: 'Peter '},
// 	]);
// }

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
        console.log('connected')
})

var kittySchema = mongoose.Schema({
        name: String
})

var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence'});
console.log(silence.name);


silence.save(function (err, silence) {
        if (err) return console.error(err);
		Kitten.find(function (err, kittens) {
		        if (err) return console.error(err);
		        console.log(kittens);
		})
})

exports.all = function(fn){
	// fn(null, silence)
	fn (null, kittens) {Kitten.find(function(err, kittens) {
		if(err) return console.error(err);
		kittens};
	})
}