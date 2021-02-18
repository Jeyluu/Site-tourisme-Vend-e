
exports.getArticleListPage = async (req, res) => {
    const articleTotal = await querysql('SELECT COUNT(*) AS total FROM article')
    const articlesAdmin = await querysql('SELECT article.titre, article.image,article.articleId, auteur.nom FROM auteur INNER JOIN article ON auteur.auteurId = article.auteurId ORDER BY titre')
    
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
    const imageURL = "https://www.kyoceradocumentsolutions.be/blog/wp-content/uploads/2019/03/iStock-881331810.jpg"
    const {titre,categorieId, description, contenu, auteurId} = req.body

    //GESTION D'EXCEPTION
    try{
        await querysql(
            "INSERT INTO article (titre,categorieId, description,contenu, auteurId, image) VALUES ('" + titre + "','" + categorieId + "','" + description + "','" + contenu + "','" + auteurId + "','" + imageURL + "');",

        (err,result) => {
            if(err) {
                res.send(err)
            } else {
                return res.redirect('/tableau-de-bord/liste-des-articles')
            }
        }
        )

    } catch(err) {
        res.status(400).json({message:err})
    }
}


//AFFICHER UN ARTICLE AVANT MODIFICATION
exports.getEditArticlePage = async (req,res) => {
    const listeDesCategories = await querysql ('SELECT * FROM activites')
    const listeDesAuteurs = await querysql ('SELECT * FROM auteur')
    const articleSingle = await querysql("SELECT * FROM article WHERE articleId = '"+ req.params.id +"';")
    
    res.render('admin/editionPage', {modification: articleSingle[0], auteurs: listeDesAuteurs, categorie: listeDesCategories})
}

exports.EditArticlePage = async (req, res) => {
    const imageURL = "https://blog.equiphotel.com/wp-content/uploads/2018/12/shutterstock_550966804.jpg"
    const {titre,categorieId, description, contenu, auteurId} = req.body
    
    //GESTION D'EXCEPTION
    try{
        await querysql(
            "UPDATE article SET titre = '"+ titre +"',categorieId = '"+ categorieId +"', description = '"+ description +"',contenu = '"+ contenu +"', auteurId = '"+ auteurId +"', image = '"+ imageURL +"' WHERE articleId ='"+ req.params.id+"';",

        (err,result) => {
            if(err) {
                res.send(err)
            } else {
                return res.redirect('/tableau-de-bord/liste-des-articles')
            }
        }
        )

    } catch(err) {
        res.status(400).json({message:err})
}
}