
exports.getArticleListPage = async (req, res) => {
    const articlesAdmin = await querysql('SELECT article.titre, article.image, auteur.nom FROM auteur INNER JOIN article ON auteur.auteurId = article.auteurId')
    res.render('admin/listeDesArticles', {ListeDesArticles: articlesAdmin})
}