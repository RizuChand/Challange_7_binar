login = (req, res) => {
    res.send('login')
  }

logposh =  (req, res) => {
    res.send('ini login post')
  }

register =  (req, res) => {
    res.send('ini register')
  }

regpost = (req, res) => {
    res.send('ini register post')
  }


module.exports = {
    login,
    logposh,
    register,
    regpost
}
