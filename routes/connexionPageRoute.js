const router = require('express').Router()
const connexionController = require('../controllers/connexionController')


//------------------- login ---------------------
//GET
router.get('/connexion',connexionController.getConnexionPage)

//POST
router.post('/connexion',connexionController.postConnexion)
//------------------- Inscription ---------------------
//GET
router.get('/inscription', connexionController.getInscriptionPage)

//POST
router.post('/inscription', connexionController.postInscription)

//------------------- Deconnexion ---------------------

router.get('/deconnexion', connexionController.getDeconnexion)



module.exports = router