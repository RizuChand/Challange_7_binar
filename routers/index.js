
const routes = require('express').Router();

//modul export
const {login,register,regpost} = require('../controllers/auth')
const {dashboard} = require('../controllers/dashboard')
const restrict = require('../middleware/restrics')
const passport = require('../lib/passport')
   


routes.get('/', )

routes.get('/login',login)

routes.post('/login',passport.authenticate('local', {
    successRedirect: '/dasboard',
    failureRedirect: '/register',
    failureFlash: true // Untuk mengaktifkan express flash
   }))

routes.get('/register',register)

routes.post('/register',regpost)

routes.get('/dashboard',restrict,dashboard )

routes.get('/whoami', restrict, (req, res) => {
    const {username} = req.user.dataValues
    res.send(`my name is ${username}`)
})


module.exports = routes;