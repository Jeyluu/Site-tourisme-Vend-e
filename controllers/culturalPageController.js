
//AFFICHAGE DE LA PAGE CULTURE

exports.getCulturalPage = async (req, res) => {
    const listeCategorie = await querysql('SELECT * FROM activites')
    res.render('culturalPage', {categorie: listeCategorie})
}