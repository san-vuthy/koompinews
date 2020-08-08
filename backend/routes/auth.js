const express = require('express');

const { CreateUser } = require('../controller/auth');

const router = express.Router();

router.route('/').post(CreateUser);

module.exports = router;
