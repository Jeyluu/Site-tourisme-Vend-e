
exports.getArticleListPage = async (req, res) => {
    const articlesAdmin = await querysql('SELECT * FROM article')
    res.render('admin/listeDesArticles', {ListeDesArticles: articlesAdmin})
}