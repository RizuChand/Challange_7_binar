
const routes = require('express').Router();

//modul export
const {login,logposh,register,regpost} = require('../controllers/auth')
const {dashboard} = require('../controllers/dashboard')


routes.get('/', )

routes.get('/login',login)

routes.post('/login',logposh)

routes.get('/register',register)

routes.post('/register',regpost)

routes.get('/dashboard',dashboard )


module.exports = routes;