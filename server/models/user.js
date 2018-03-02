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
	}],
};

const userScheme = new Schema(user, {versionKey: false});
const Users = mongoose.model('Users', userScheme);

exports.get = (id, cb) => {
	Users.find({id}, (err, user) => {
		cb(err, user)
	});
}

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
					tasks: [{}],
				}, (err, user) => {
					cb(err, user)
				})
			}
  });
};

exports.createTask = (id, newTask, cb) => {
	const task = {
		id: Date.now(),
		text: newTask.text,
		isDone: newTask.isDone,
		priority: newTask.priority,
		category: newTask.category
	};

	Users.update({ id }, { $push: { tasks: task } }, (err, status) => {
		cb(err, status)
  });
};

exports.updateTask = (id, task, cb) => {
	Users.updateOne({ id, "tasks.id": task.id}, { $set: { "tasks.$": task }}, (err, status) => {
	  cb(err, status)
  });
};

exports.deleteTask = (id, data, cb) => {
	if(data.id) {
		Users.update({ id }, { $pull: { tasks: { id: data.id } }}, (err, status) => {
		  cb(err, status)
	  });
	} else {
		Users.update({ id }, { $pull: { tasks: { isDone: data.isDone, category: data.category } }}, (err, status) => {
		  cb(err, status)
	  });
	}
};