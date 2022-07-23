const {
  usergame
} = require('../models')

const passport = require('../lib/passport')

login = (req, res) => {
  res.render('login')
}

logposh = ('/login',passport.authenticate('local', {
  successRedirect: '/dasboard',
  failureRedirect: '/register',
  failureFlash: true // Untuk mengaktifkan express flash
 }))
register = (req, res) => {
  res.render('register')
}

regpost = (req, res) => {

  const {username,password} = req.body

 //res.send(`${username},${password}`)

  usergame.register(req.body)
    .then(() => {
      res.redirect('/login')
    })
    .catch(err => {
      console.log(err)
      next(err);
    })

}




module.exports = {
  login,
  logposh,
  register,
  regpost
}