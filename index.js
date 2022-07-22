const express = require('express');





//modul export
const {login,logposh,register,regpost} = require('./controllers/auth')
const {dashboard} = require('./controllers/dashboard')

const app = express()
const port = 8080;
app.set('view engine', 'ejs');

app.get('/', )

app.get('/login',login)

app.post('/login',logposh)

app.get('/register',register)

app.post('/register',regpost)

app.get('/dashboard',dashboard )

app.post('/dashboard', )










app.listen(port, () => {
    console.log(`server berjalan di ${port}`);
})