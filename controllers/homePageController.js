exports.getHomePage = async (req, res) => {
    const listeCategorie = await querysql("SELECT * FROM activites")
    res.render('homePage', {categories: listeCategorie})
}