const router = require('express').Router()
const dashboardPageController = require('../controllers/dashboardPageController')

router.get('/tableau-de-bord',dashboardPageController.getDashboardPage)

module.exports = router