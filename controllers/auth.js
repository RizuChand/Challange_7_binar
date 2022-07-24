const {
  usergame
} = require('../models')


 
function login  (req, res) {
  res.render('login')
}


function register  (req, res)  {
  res.render('register')
}

function regpost (req, res) {

  //cek data masuk di form

//  const {username,password} = req.body
//  console.log(`${username},${password}`)

  usergame.register(req.body)
    .then(() => {
      res.redirect('/login')
    })
    .catch(err => {
      console.log(err)
      next(err);
    })

        // debug isi tanpa enkripsi
  // const {username, password} = req.body;
  //   usergame.create({
  //       username,
  //       password,
  //       superUser : false
  //   }).then(user => {
  //       console.log({user});
  //       // redirect to view login
  //       res.redirect("/login")
  //   })

}


module.exports = {
  login,
  register,
  regpost
}