// di jalan kan di postman

const apisRoutes = require('express').Router()
const {usergame} = require('../models')
const passportJWT =  require('../lib/passport-jwt')
const format = (user) => {

    const {id, username} = user

    return {
        id,
        username, 
        TokennyaAkang: user.generateToken()
    }
}

const restrictJWT = passportJWT.authenticate('jwt', {
    session: false
})

apisRoutes.post('/login', (req, res) => {
    usergame.authenticate(req.body)
        .then(user => {
            res.json(
                format(user)
            )
        })

})

apisRoutes.get('/home', restrictJWT, (req, res) => {
    res.send('welcome to protected api section')
})

apisRoutes.get('/whoami', restrictJWT, (req, res) => {
    const {username} = req.user.dataValues
    res.send(`my name is ${username}`)
})

module.exports = apisRoutes