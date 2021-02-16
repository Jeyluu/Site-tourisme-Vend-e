const router = require('express').Router()
const dashboardPageController = require('../controllers/dashboardPageController')
const articleAdminController = require('../controllers/articleAdminController')

//AFFICHAGE PAGE ADMIN
router.get('/',dashboardPageController.getDashboardPage)

//AFFICHAGE LISTE DES ARTICLES
router.get('/listeDesArticles',articleAdminController.getArticleListPage)

module.exports = router