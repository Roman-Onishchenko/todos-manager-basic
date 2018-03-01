const mongoose = require("mongoose");
const md5 = require("blueimp-md5");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersdb");

const user = {
	id: String,
	name: String,
	login: String,
	email: String,
	pass: String,
	tasks: [{
		id: Number,
		text: String,
		isDone: Number,
		priority: String,
		category: String
	}]
};

const userScheme = new Schema(user, {versionKey: false});
const Users = mongoose.model('Users', userScheme);

exports.checkAuth = (data, cb) => {
	Users.findOne({email: data.email, pass: md5(data.pass)}, (err, user) => {
		if(!user) {
			cb(err, {notAuth: true}); 
		} else {
				cb(err, user)
			}
		})
	}

exports.createUser = (data, cb) => {
	Users.findOne({email: data.email}, (err, user) => {
		if(user) {
			cb(err, {userExist: true}); 
		} else {
				Users.create({
					id: md5(Date.now()),
				  name: data.name,
					login: data.login,
					email: data.email,
					pass: md5(data.pass),
					tasks: [],
				}, (err, user) => {
					cb(err, user)
				})
			}
  });
};

// exports.update = (data, cb) => {
// 	Tasks.update({id: data.id}, data, (err, result) => {
// 		cb(err, result)
// 	});
// };

// exports.delete = (data, cb) => {
// 	if(data.id) {
// 		Tasks.remove({id: data.id}, (err, result) => {
// 		cb(err, result)
// 	});
// 	} else {
// 		Tasks.remove({isDone: data.isDone, category: data.category}, (err, result) => {
// 			cb(err, result)
// 		});
// 	}
// };