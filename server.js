const express = require('express')
const app = express()
var hbs = require('hbs');

app.use(express.static('public')) 
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/home', function (req, res) {
  res.render("home.hbs")
})

app.get('/about', function (req, res) {
  res.render("about.hbs")
})

app.get('/contact', function (req, res) {
  res.render("contact.hbs")
})


 
app.listen(3000)