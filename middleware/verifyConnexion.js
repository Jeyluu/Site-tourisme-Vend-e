exports.getVerifyConnexion = (req, res, next) => {
    if(req.session.utilisateur === undefined) {
        req.flash('message',"Vous devez être connecté")
        return res.redirect('/connexion')
    } else {
        next()
    }
    
}