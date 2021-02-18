const router = require('express').Router()
const dashboardPageController = require('../controllers/dashboardPageController')
const articleAdminController = require('../controllers/articleAdminController')

//AFFICHAGE PAGE ADMIN
router.get('/',dashboardPageController.getDashboardPage)

//AFFICHAGE LISTE DES ARTICLES
router.get('/liste-des-articles',articleAdminController.getArticleListPage)

//AFFICHER UN FORMULAIRE D'ARTICLE
router.get('/liste-des-articles/ajouter', articleAdminController.getAddArticlePage)

//AJOUTER UN ARTICLE
router.post('/liste-des-articles/ajouter', articleAdminController.postArticlePage)

//AFFICHER AVANT EDITION D'UN ARTICLE
router.get('/liste-des-articles/edit/:id', articleAdminController.getEditArticlePage)

//EDITION D'UN ARTICLE
router.put('/liste-des-articles/edit/:id', articleAdminController.EditArticlePage)

//SUPPRESSION D'UN ARTICLE
router.delete('/liste-des-articles/:id', articleAdminController.deleteArticle)

module.exports = router