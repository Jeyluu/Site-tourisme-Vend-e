const bcrypt = require('bcrypt')

exports.getConnexionPage = (req, res) => {
    res.render('connexion')
}

exports.getInscriptionPage = (req, res) => {
    res.render('inscription')


}

exports.postInscription = async (req, res) => {
    const {nom, prenom, email, motdepasse} = req.body

    //si l'email existe

    const findEmail = await querysql('SELECT COUNT(*) AS cnt FROM utilisateur WHERE email=?', [email])
    
    if(findEmail[0].cnt > 0) {
        console.log('email déjà existant');
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
                return res.redirect('/inscription')
            }
            return res.redirect('/')
        }
        )

    } catch(err) {
        res.status(400).json({message:err})
    }

}