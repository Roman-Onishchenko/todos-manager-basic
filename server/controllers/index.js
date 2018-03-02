const express = require('express'), 
			router = express.Router();
			bodyParser = require('body-parser');

router.use(require('./users'))

module.exports = router