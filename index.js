const express = require('express');



//modul export

const routers = require('./routers/index')

const app = express()
const port = 8080;
app.set('view engine', 'ejs');

app.use(routers);












app.listen(port, () => {
    console.log(`server berjalan di ${port}`);
})