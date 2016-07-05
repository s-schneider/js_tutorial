var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
        console.log('connected');
});

var UserSchema = mongoose.Schema({
        name: String
});

var User = mongoose.model('User', UserSchema);

exports.all = function(callback){

	User.find(function(err, users) {
			if(err) return console.error(err);
			callback(null, users);	
		});
};

exports.create = function(arguments, callback){
	// 1. receive name, pw
	var newuser = new User(arguments);
	// 2. save user
	newuser.save(function (err, saveduser) {
        	// if (err) return console.error(err);
        	if (err) {
        		return console.error(err)
        	} else {
        		return console.log('success')
        	}
		});
	// 3. return success or failure

}
