const express = require('express'),
      router = express.Router(),
      Task = require('../models/task');

router.get('/tasks', (req, res) => {
  Task.get((err, tasks) => {
    res.send(tasks)
  })
})

router.post('/tasks', (req, res) => {
  Task.create(req.body, (err, task) => {
    res.send(task)
  })
})

router.put('/tasks', (req, res) => {
  Task.update(req.body.id, (err, comment) => {
    res.send('task')
  })
})

router.delete('/tasks', (req, res) => {
  Task.delete(req.body.id, (err, result) => {
    console.log(result);
    res.send(result)
  })
})

module.exports = router
