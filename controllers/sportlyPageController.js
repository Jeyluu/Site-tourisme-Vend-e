
exports.getSportlyPage = async (req, res) => {
    const listeCategorie = await querysql('SELECT * FROM activites ')
    const articleSportif = await querysql('SELECT * FROM article WHERE categorieId= 2')
    res.render('sportlyPage', {categorie: listeCategorie, listeArticle: articleSportif})
}