const router = require('express').Router()
const connexionController = require('../controllers/connexionController')


//------------------- login ---------------------
router.get('/connexion',connexionController.getConnexionPage)

//------------------- Inscription ---------------------
//GET
router.get('/inscription', connexionController.getInscriptionPage)

//POST
router.post('/inscription', connexionController.postInscription)





module.exports = router