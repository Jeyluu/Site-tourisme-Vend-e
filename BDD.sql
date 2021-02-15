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
