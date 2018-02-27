const express = require('express'), 
			router = express.Router();
			bodyParser = require('body-parser');

// router.use(bodyParser.json());

router.use(require('./tasks'))

module.exports = router