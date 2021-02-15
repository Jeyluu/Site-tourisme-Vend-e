const router = require('express').Router()
const sportlyPageController = require('../controllers/sportlyPageController')

router.get('/activites-sportives',sportlyPageController.getSportlyPage)

module.exports = router