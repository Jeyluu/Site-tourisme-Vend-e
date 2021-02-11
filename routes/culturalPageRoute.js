const router = require('express').Router();
const culturalPageController = require('../controllers/culturalPageController')


router.get('/activites-culturelles',culturalPageController.getCulturalPage)

module.exports = router