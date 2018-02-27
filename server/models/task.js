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
		cb(err, tasks)
	});
}

exports.create = (newTask, cb) => {
	const task = new Tasks({
		id: newTask.id,
		text: newTask.text,
		isDone: newTask.isDone,
		priority: newTask.priority,
		category: newTask.category
	})
	task.save((err) => {
	  cb(err, task)
  });
};

exports.update = () => 'str';

exports.delete = (id, cb) => {
  Tasks.remove({ id }, (err, result) => {    
    cb(err, result)
  });
};