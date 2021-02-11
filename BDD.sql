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


-- AFFICHER LA TABLE ACTIVITÉ
SELECT * FROM activites;


-- sous TABLE culture
CREATE TABLE culture (
	cultureId INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(25),
    description VARCHAR(1000),
    image VARCHAR(1000),
    utilisateursId INT
);

-- AJOUT ARTICLE DANS LA SOUS TABLE CULTURE
INSERT INTO culture ()
VALUES 
( );


-- sous TABLE Sportives
CREATE TABLE sportives (
	sportivesId INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(25),
    description VARCHAR(1000),
    image VARCHAR(1000),
    auteurId INT
);



-- sous TABLE Culinaire
CREATE TABLE culinaire (
	culinaireId INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(25),
    description VARCHAR(1000),
    image VARCHAR(1000),
    auteurId INT
);

