const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersdb");

const task = {
	id: Number,
	text: String,
	isDone: Number,
	priority: String,
	category: String
};

const taskScheme = new Schema(task, {versionKey: false});
const Tasks = mongoose.model('Tasks', taskScheme);

exports.get = (cb) => {
	Tasks.find({}, (err, tasks) => {
		mongoose.disconnect();
		cb(err, tasks)
	});
}

exports.create = (task, cb) => {
	
};

exports.update = () => 'str';

exports.delete = () => 'str';