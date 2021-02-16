
exports.getArticleListPage = async (req, res) => {
    const articleTotal = await querysql('SELECT COUNT(*) AS total FROM article')
    const articlesAdmin = await querysql('SELECT article.titre, article.image, auteur.nom FROM auteur INNER JOIN article ON auteur.auteurId = article.auteurId')
    res.render('admin/listeDesArticles', {ListeDesArticles: articlesAdmin, CompteDesArticles: articleTotal[0].total })
}