const express = require('express'), 
			app = express(), 
			bodyParser = require('body-parser'),
			jsonParser = bodyParser.json(), 
			port = process.env.PORT || 5000,
			mongoClient = require('mongodb').MongoClient,
			url = process.env.MONGOLAB_URI;

app.use(express.static('build'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))

app.listen(port, () => console.log(`Listening on port ${port}`));