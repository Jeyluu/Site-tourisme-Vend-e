const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const util = require('util')
const methodOverride = require('method-override');
const port = 7000;

// DotEnv
require('dotenv').config()

// override
app.use(methodOverride('_method'))

//MYSQL



const db = mysql.createConnection(
    {

        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,

    }
)


db.connect(
    (err) => {
        if (err) { throw err }
        console.log('Connecté au serveur MySQL');
    }
)

//DECLARE LA VARIABLE LOCAL QUERYSQL
global.querysql = util.promisify(db.query).bind(db)


// Middleware - BodyParser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// EJS
app.set('view engine', 'ejs');


//DOSSIER STATIC PUBLIC
app.use(express.static(path.join(__dirname, 'public')));

/*---------------------------------------------------------------*/
// ROUTE
const homePage = require('./routes/homePageRoute')
const connexionPage = require('./routes/connexionPageRoute')

//ROUTE ADMIN
const dashboardPage = require('./routes/dashboardPageRoute')

//CONTROLLER ADMIN
app.use('/tableau-de-bord', dashboardPage)

//CONTROLLER
app.use('/', connexionPage)
app.use('/', homePage) // doit toujours être à la fin



//LISTEN
app.listen(port, () => {
    console.log(`Vous êtes bien connecté au ${port}, le ${new Date().toLocaleString()}`);
})