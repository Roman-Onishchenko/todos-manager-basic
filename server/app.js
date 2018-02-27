const express = require('express'), 
			app = express(), 
			bodyParser = require('body-parser'),
			jsonParser = bodyParser.json(), 
			port = process.env.PORT || 5000,
			mongoClient = require('mongodb').MongoClient,
			url = 'mongodb://localhost:27017/db';

// app.set('views', __dirname + '/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use(require('./middlewares/task'))
app.use(require('./controllers'))

app.listen(port, () => console.log(`Listening on port ${port}`));

// Now you can start the service and check its state by

// sudo systemctl start mongodb
// sudo systemctl status mongodb
// and finally enable it permanently by

// sudo systemctl enable mongodb