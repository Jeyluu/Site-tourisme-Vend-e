const router = require('express').Router()
const homePageController = require('../controllers/homePageController')

//Page Principale
router.get('/', homePageController.getHomePage)

module.exports = router