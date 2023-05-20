const express = require('express')
const { UserContactedData } = require('../controllers/User')
const router = express.Router()

router.route('/contact').post(UserContactedData)

module.exports = router