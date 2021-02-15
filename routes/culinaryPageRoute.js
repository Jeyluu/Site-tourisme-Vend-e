const router = require('express').Router()
const culinaryPageController = require('../controllers/culinaryPageController')

router.get('/activites-culinaires', culinaryPageController.getCulinaryPage)

module.exports = router