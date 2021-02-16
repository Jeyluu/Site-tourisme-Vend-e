const router = require('express').Router()
const homePageController = require('../controllers/homePageController')
const culturalPageController = require('../controllers/culturalPageController')
const sportlyPageController = require('../controllers/sportlyPageController')
const culinaryPageController = require('../controllers/culinaryPageController')

//Page Principale
router.get('/', homePageController.getHomePage)

//LIEN VERS CULTURAL PAGE
router.get('/activites-culturelles', culturalPageController.getCulturalPage)

//LIEN VERS SPORTLY PAGE
router.get('/activites-sportives',sportlyPageController.getSportlyPage)

//LIEN VERS CULINARY PAGE
router.get('/activites-culinaires', culinaryPageController.getCulinaryPage)

module.exports = router