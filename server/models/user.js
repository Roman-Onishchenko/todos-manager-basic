const mongoose = require("mongoose");
const md5 = require("blueimp-md5");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersdb");

const user = {
	id: String,
	name: String,
	login: Number,
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

// exports.get = (cb) => {
// 	Tasks.find({}, (err, tasks) => {
// 		cb(err, tasks)
// 	});
// }

exports.create = (user, cb) => {
	const newUser = new Users({
		id: md5(Date.now()),
	  name: user.name,
		login: user.login,
		email: user.email,
		pass: md5(user.pass),
	})
	newUser.save((err) => {
	  cb(err, user)
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