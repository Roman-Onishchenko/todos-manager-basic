const express = require('express'),
      router = express.Router(),
      Task = require('../models/task');

router.get('/tasks', (req, res) => {
  res.send('tasks');
  console.log('get');
  // Task.get({}, (err, tasks) => {
  //   res.send('tasks')
  // })
})

router.post('/tasks', (req, res) => {
	console.log(req);
  Task.create(req.params.id, (err, task) => {
    res.send(task)
  })
})

router.put('/tasks:id', (req, res) => {
  console.log(req);
  Task.update(req.params.id, (err, comment) => {
    res.send(task)
  })
})

router.delete('/tasks', (req, res) => {
  console.log(req);
  Task.delete(req.params.id, (err, comment) => {
    res.redirect('/tasks')
  })
})

module.exports = router
