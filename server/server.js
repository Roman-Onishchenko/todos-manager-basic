// const express = require('express');
// const bodyParser = require("body-parser");
// const mongoClient = require("mongodb").MongoClient;
// const objectId = require("mongodb").ObjectID;
// const app = express();
// const jsonParser = bodyParser.json();
// const port = process.env.PORT || 5000;

// const url = "mongodb://localhost:27017/db";

// app.get('/tasks', (req, res) => {
//   mongoClient.connect(url, (err, db) => {
//     db.collection("tasks").find({}).toArray((err, tasks) => {
//       res.send(tasks)
//       db.close();
//     });
//   });
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));
