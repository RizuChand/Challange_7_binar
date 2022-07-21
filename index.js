const express = require('express');

const app = express()
const port = 8080;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/login', (req, res) => {
    res.send('ini login')
  })
app.post('/login', (req, res) => {
    res.send('post log in')
  })
app.get('/register', (req, res) => {
    res.send('ini register')
  })
app.post('/register', (req, res) => {
    res.send('post register')
  })









app.listen(port, () => {
    console.log(`server berjalan di ${port}`);
})