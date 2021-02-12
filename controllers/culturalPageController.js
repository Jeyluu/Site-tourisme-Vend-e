
//AFFICHAGE DE LA PAGE CULTURE

exports.getCulturalPage = async (req, res) => {
    const listeCategorie = await querysql('SELECT * FROM activites')
    const articleCulture = await querysql('SELECT * FROM article')
    console.log(articleCulture);
    res.render('culturalPage', {categorie: listeCategorie, listeArticle: articleCulture})
}