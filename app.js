const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const util = require('util')
const port = 7000;

// DotEnv
require('dotenv').config()


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
const culturalPage = require('./routes/culturalPageRoute')
const sportlyPage = require('./routes/sportlyPageRoute')
const culinaryPage = require('./routes/culinaryPageRoute')

//CONTROLLER

app.use('/', homePage)
app.get('/activites-culturelles', culturalPage)
app.get('/activites-sportives',sportlyPage)
app.get('/activites-culinaires', culinaryPage)


//ROUTE ADMIN
const dashboardPage = require('./routes/dashboardPageRoute')




//CONTROLLER ADMIN
app.get('/tableau-de-bord', dashboardPage)


//LISTEN
app.listen(port, () => {
    console.log(`Vous êtes bien connecté au ${port}, le ${new Date().toLocaleString()}`);
})