
exports.getCulinaryPage = async (req, res) => {
    const listeCategorie = await querysql('SELECT * FROM activites ')
    const articleCulinaire = await querysql('SELECT * FROM article WHERE categorieId= 3')
    res.render('culinaryPage', {categorie: listeCategorie,listeArticle: articleCulinaire})
}