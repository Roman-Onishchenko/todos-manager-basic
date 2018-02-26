Task = require('../models/task')

module.exports = (req, res, next) => {
	next()
//   Task.get({}, (err, task) => {
//     if (task) {
//       req.task = task
//     } else {
//       delete req.task
//     }
//     next()
//     })
}

// https://www.terlici.com/2014/08/25/best-practices-express-structure.html