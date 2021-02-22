const bcrypt = require('bcrypt')

//INSCRIPTION
exports.getInscriptionPage = (req, res) => {
    res.render('inscription', {message:req.flash("message")}) // la variable message que nous chargons dans req.flash est message qui est déclaré à la ligne 21


}

exports.postInscription = async (req, res) => {
    const {nom, prenom, email, motdepasse} = req.body

    //si l'email existe

    const findEmail = await querysql('SELECT COUNT(*) AS cnt FROM utilisateur WHERE email=?', [email])
    
    if(findEmail[0].cnt > 0) {
        req.flash("message", "L'email déjà existant")
        return res.redirect('/inscription')
    }

    //ajouter un utilisateur
    try{

        //hasher le mot de passe
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(motdepasse, salt)
        
        await querysql("INSERT INTO utilisateur (nom, prenom, email, motdepasse) VALUES(?,?,?,?)",
        [nom, prenom, email, hash],
        (err, result) => {
            if(err){
                req.flash("message", `Il y a une erreur ${err}`)
                return res.redirect('/inscription')
            }
            req.flash("message", `Merci de votre inscription ! Vous pouvez maintenant vous connecter`)
            return res.redirect('/connexion')
        }
        )

    } catch(err) {
        res.status(400).json({message:err})
    }

}


//CONNEXION
exports.getConnexionPage = (req, res) => {
    res.render('connexion', {message: req.flash("message"), messemail:req.flash("messemail"), messmdp:req.flash("messmdp")})
}

exports.postConnexion = async (req, res) => {

    const {email,motdepasse} = req.body

    //si l'email n'existe pas
    const findEmail = await querysql('SELECT COUNT(*) AS cnt FROM utilisateur WHERE email=?', [email])
    
    if(!findEmail[0].cnt > 0) {
        req.flash("messemail", "L'email n'existe pas. Merci de vous inscrire sur l'onglet inscription")
        return res.redirect('/connexion')
    }

    //si l'email existe 
    //Verifier le mot de passe
    const utilisateur = await querysql('SELECT utilisateurId,nom, prenom, email, motdepasse FROM utilisateur WHERE email = ?', email)
    const checkpassword = await bcrypt.compare(motdepasse,utilisateur[0].motdepasse)

    if(!checkpassword) {
        req.flash("messmdp","Le mot de passe ne correspond pas")
        return res.redirect('/connexion')
    } else {
        req.session.utilisateurId = utilisateur[0].utilisateurId
        req.session.utilisateur = {
            id: utilisateur[0].utilisateurId,
            nom: utilisateur[0].nom,
            prenom: utilisateur[0].prenom,
            email: utilisateur[0].email,
        }
        return res.redirect("/tableau-de-bord")
    }


}


//DECONNEXION

exports.getDeconnexion = (req, res) => {
    req.session.destroy(function(err){
        res.redirect('/')
    })
}

