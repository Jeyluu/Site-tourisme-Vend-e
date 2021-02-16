-- CREATION DE LA BASE DE DONNEES
CREATE DATABASE blogVendee;
USE blogVendee;


-- TABLE Activitées
CREATE TABLE activites (
	categorieId INT PRIMARY KEY AUTO_INCREMENT,
    categorie VARCHAR(25),
    image VARCHAR(255), 
    description VARCHAR(255)
);

-- AJOUT ARTICLE DANS LA SOUS TABLE CULTURE
INSERT INTO activites (categorie, image, description)
VALUES 
('Culturelles', 'https://www.vendee-tourisme.com/sites/www.vendee-tourisme.com/files/styles/inspirez_moi_entete/public/thumbnails/image/visite-chateau-tiffauges.jpg?itok=m-Y4lCcv','Vous découvrirez dans cette section les différentes activités en repport avec l histoire de la Vendée '),
('Sportives', 'https://www.lessables.mobi/var/ayaline/storage/images/lessables.mobi/decouvrir/sports-loisirs/tous-les-sports-et-loisirs/295971-2-fre-FR/Tous-les-Sports-et-Loisirs_mise_en_avant_niveau_1_filter.jpg','Vous découvrirez dans cette section les différentes activités en repport avec l histoire de la Vendée '),
('Culinaires', 'https://demarchesadministratives.fr/images/actualites/2730/le-plafond-journalier-des-tickets-restaurant-passe-a-38-jusquau-31-decembre-2020-1.jpg','Dans cette section vous découvrirez les différents spots ou je suis passé et que j ai trouvé sympa tant en terme d ambiance que service proposé ');


-- MISE A JOUR BASE DE DONNÉE 
UPDATE activites
SET image = 'https://cdn.tohapi.com/media/FR/uploads/themes/182/04.jpg'
WHERE categorieId = 1;

-- AFFICHER LA TABLE ACTIVITÉ
SELECT * FROM activites;


--  TABLE auteur
CREATE TABLE auteur (
	auteurId INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50)
);

INSERT INTO auteur (nom)
VALUES
('StephQuiBrasse'),
('SalutMicka'),
('MaisOuEstVlad');

-- AFFICHER LA TABLE auteur

SELECT * FROM auteur;

--  TABLE article
CREATE TABLE article (
	articleId INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(25),
    description VARCHAR(1000),
    image VARCHAR(1000),
    categorieId INT,
    auteurId INT,
    FOREIGN KEY (categorieId) REFERENCES activites(categorieId),
    FOREIGN KEY (auteurId) REFERENCES auteur(auteurId)
);
-- AJOUT DE LA COLONNE CONTENU

ALTER TABLE article
ADD contenu VARCHAR(255);

-- MODIFCATION NOM DE COLONNE
ALTER TABLE article
CHANGE nom titre VARCHAR(25);

-- AFFICHER LA TABLE article

SELECT *
FROM article
WHERE categorieId = 1;

-- AJOUT ARTICLE DANS LA TABLE AUTEUR

INSERT INTO article(nom,description,image, contenu, auteurId, categorieId)
VALUES
('Le parc du Puy Du Fou','Bien plus qu un Parc d attraction traditionnel, le Puy du Fou a été élu meilleur parc d attraction du monde !Venez découvrir l"histoire des guerres de Vendée','https://www.voyages-bellier.com/wp-content/uploads/sites/4473/2020/02/Puy_du_Fou_1.jpg','Le parc du Puy du Fou se situe au Epesse au nord de la Vendée. Il est situé idealement non loin de l"autoroute qui relie Angers de la Roche sur yon.Le Puy du Fou propose une multitude de spectacles et d’aventures, à partager entre amis ou en famille.', 1, 1),
('La vendée terre de Golf', 'La vendée est un département avec 7 golf ce qui n"est pas négligable. De plus, ils sont chacun doté de magnifique vue que ce soit sur la mer ou dans les terres','https://www.golfsaintjeandemonts.fr/images/fonds/bg_0.jpg','Pour ceux sachant golfer, je vous propose de tenter l"aventure sur l"un des 7 parcours Vendéen. N"hésitez pas à tenter celui de la Roche sur Yon. Jusqu"a peu c"était le golf le plus compliqué de France.',1, 2),
('Le reef','Vous êtes dans le sud vendée? vous cherchez une bonne adresse ou manger? cet article est fait pour vous', 'https://resofrance.eu/wp-content/uploads/2017/04/LeReef_Les-Sables-dOlonne.jpg?x32734','Ce qui caractérise le Reef: le burger et le fait maison. Superbe adresse pour y manger presque en face de la mer. Le rapport qualité prix y est imbattable. Je vous conseille fortement d"y aller', 1, 3 );

-- CREATION D'ARTICLE
INSERT INTO article(nom,description,image, contenu, auteurId, categorieId)
VALUES
('Paddle en terre Vendéenne', 'Venez faire du Paddle dans les marais, sur mer ou sur lac.','https://admin.capfrance-vacances.com/uploads/media/paddle-lac-amis.jpg','Profitez d une activité ludique, sportive et écologique. Longez la côte de Bretignolles-sur-Mer au plus près du coucher du soleil.',2,2),
('Char à voile en seaside','Venez découvrir le char à voile sur les bords de l atlantique et faire le plein de sensation forte.','https://www.payssaintgilles-tourisme.fr/sites/payssaintgilles-tourisme/files/styles/gallery_lightbox/public/assets/images/char_a_voile_5.jpg?itok=PdX_Q_fb', 'Vous déchainer sans faire attention à votre vitesse? Venez à Saint Gilles la plage y est magnifique sur un coucher de soleil inoubliable ',3,2),
('Découverte de l ile D yeu','L ile d yeu est un spot immanquable quand on va en vendée','https://i-det.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/det_yeu_plge_vieilles27.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=601&w=900','Bienvenue sur l ile d yeu, il est quasiment impensable de visité l ile sans un vélo tellement il y a de sentiers pour cycliste.',2,2),
('La ferme Villeneuve', 'Un must to go quand on séjourne du côté des Sables d Olonne.','https://axwwgrkdco.cloudimg.io/v7/mtp-cf-images.s3-eu-west-1.amazonaws.com/images/max/6216340c-ffb9-42e2-9727-3a5eef26e0c1.jpg?width=1000','La ferme Villeneuve est un restaurant situé au abord des Sables d Olonne à côté du camping les Pirons. c est un restaurant gastronomique mais avec un bon rapport qualité prix.',2,3),
('Les Reflets', 'Le restaurant référence de Vendée, il y fait bon y manger mais gare à vous si vcous n anticipez la réservation.','https://media-cdn.tripadvisor.com/media/photo-s/12/ca/50/a4/les-reflets.jpg','Le restaurant est situé à la Roche sur Yon sur la route des Sables d Olonne. Si vous voulez bien manger c est ici qu il faut aller. La nourriture y est merveilleusement bonne et aucun ingredients n est en trop. Je recommande vivement',2,3),
('Le Fatra ', 'Restaurant avec une cuisine très rafinées pour un prix raisonnable. On y noterera que la vue y est fortement agréable car donne sur le port','https://mobile-img.lpcdn.ca/lpca/924x/5191fdab/8a702351-f2d8-11ea-b8ad-02fe89184577.jpg','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',2,3),
('Le Fat Burger ', 'Restaurant à burger spécialisé dans le burger, on y retrouver toutes sortes de burger très travaillés ','https://blog.equiphotel.com/wp-content/uploads/2018/12/shutterstock_550966804.jpg','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',3,3);


-- FAIRE UNE JOINTURE ENTRE DEUX TABLES
SELECT article.titre, article.image, auteur.nom FROM auteur
INNER JOIN article ON auteur.auteurId = article.auteurId;

-- COMPTE LE NOMBRE D'ARTICLES AU TOTAL
SELECT COUNT(*) AS total FROM article;
-- PERMET DE SORTIR LES ARTICLES EN RAPPORT AVEC LE MOT
SELECT titre FROM article WHERE titre LIKE '%Golf%';