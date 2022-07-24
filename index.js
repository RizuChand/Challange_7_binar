const express = require('express');
const app = express()

const session = require('express-session')
const flash = require('express-flash')
const passport = require('./lib/passport')

const port = 8080;
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: 'Buat ini jadi rahasia',
    resave: false,
    saveUninitialized: false
    }))

app.use(passport.initialize())
app.use(passport.session())    
app.use(flash()) 

//modul export
const routers = require('./routers/index')

app.set('view engine', 'ejs');



app.use(routers);














app.listen(port, () => {
    console.log(`server berjalan di ${port}`);
})