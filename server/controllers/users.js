const express = require('express'),
      router = express.Router(),
      User = require('../models/user');

router.get('/getTasks/:id', (req, res) => {
  const id = req.params.id;
  User.get(id, (err, user) => {
    res.send(user[0])
  })
})

router.post('/authUser', (req, res) => {
  User.checkAuth(req.body, (err, status) => {
    res.send(status)
  })
})

router.post('/createUser', (req, res) => {
  User.createUser(req.body, (err, user) => {
    res.send(user)
  })
})

router.post('/createTask/:id', (req, res) => {
  const id = req.params.id;
  User.createTask(id, req.body, (err, status) => {
    res.send(status)
  })
})

// router.put('/tasks', (req, res) => {
//   Task.update(req.body, (err, result) => {
//     res.send(result)
//   })
// })

// router.delete('/tasks', (req, res) => {
//   Task.delete(req.body, (err, result) => {
//     res.send(result)
//   })
// })

module.exports = router
