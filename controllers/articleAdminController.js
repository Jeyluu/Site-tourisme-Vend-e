
exports.getArticleListPage = async (req, res) => {
    const articleTotal = await querysql('SELECT COUNT(*) AS total FROM article')
    const articlesAdmin = await querysql('SELECT article.titre, article.image, auteur.nom FROM auteur INNER JOIN article ON auteur.auteurId = article.auteurId')
    res.render('admin/listeDesArticles', {ListeDesArticles: articlesAdmin, CompteDesArticles: articleTotal[0].total })
}

//AFFICHER UN FORMULAIRE D'ARTICLE
exports.getAddArticlePage = async (req, res) => {
    const listeDesCategories = await querysql ('SELECT * FROM activites')
    const listeDesAuteurs = await querysql ('SELECT * FROM auteur')
    res.render('admin/ajouterUnArticle', {auteurs:listeDesAuteurs, categorie: listeDesCategories})
}

//AJOUTER UN ARTICLE
exports.postArticlePage = async (req, res) => {

}