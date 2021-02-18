const router = require('express').Router()
const connexionController = require('../controllers/connexionController')


//------------------- login ---------------------
router.get('/connexion',connexionController.getConnexionPage)








module.exports = router