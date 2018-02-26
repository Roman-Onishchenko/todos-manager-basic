const express = require('express'), 
			router = express.Router();

router.use(require('./tasks'));

module.exports = router