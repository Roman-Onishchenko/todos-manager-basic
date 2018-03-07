const express = require('express'),
      router = express.Router(),
      User = require('../models/user');

router.get('/getTasks/:id', (req, res) => {
  const id = req.params.id;
  User.get(id, (err, user) => {
    if(err) return res.status(400).send();
    res.send(user[0])
  })
})

router.post('/authUser', (req, res) => {
  User.checkAuth(req.body, (err, status) => {
    res.send(status)
  })
})

router.post('/createUser', (req, res) => {
  User.createUser(req.body, (err, status) => {
    res.send(status)
  })
})

router.post('/createTask/:id', (req, res) => {
  const id = req.params.id;
  User.createTask(id, req.body, (err, status) => {
    if(err) return res.status(400).send();
    res.send(status)
  })
})

router.put('/updateTask/:id', (req, res) => {
  const id = req.params.id;
  User.updateTask(id, req.body, (err, result) => {
    if(err) return res.status(400).send();
    res.send(result)
  })
})

router.delete('/deleteTask/:id', (req, res) => {
  const id = req.params.id;
  User.deleteTask(id, req.body, (err, result) => {
    if(err) return res.status(400).send();
    res.send(result)
  })
})

module.exports = router
