
exports.getDashboardPage = (req, res) => {
    const utilisateur = req.session.utilisateur
    res.render('admin/dashboardPage', {utilisateur})
}