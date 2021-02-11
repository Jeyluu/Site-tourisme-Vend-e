-- TABLE Utilisateurs 
CREATE TABLE utilisateurs (
	utilisateursId INT PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(25),
    nom VARCHAR(25),
    prenom VARCHAR(25),
    email VARCHAR(50)
);