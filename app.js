const express = require('express')
const app = express()

app.use('/css', express.static('css'));
app.use('/lib/fonts', express.static('lib/fonts'));

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index')
})


app.listen(3000)
