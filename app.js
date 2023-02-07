const express = require('express')

const hbs = require('hbs')
const { mainModule } = require('process')

const app = express()

app.use(express.static(`${__dirname}/public`))
app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)

app.get('/', (request, response) => {
  response.render('home', {
    navbar: true,
    title: 'Main page',
    css: "main.css",
  })
})

app.get('/about', (req, res) => {
  console.log(req.query)
  res.render('about', { 
    navbar: true,
    title: 'About page',
    css: "about.css",
  })
})

app.get('/works', (req, res) => {
  console.log(req.query)
  res.render('works', { 
    navbar: true,
    title: 'My works',
    css: "works.css" 
   })
})

app.get('/photo', (req, res) => {
  console.log(req.query)
  res.render('photo', { 
    navbar: true,
    title: 'Photo Gallery',
    css: "photo.css"  })
})

app.get('*', (req, res) => {
  console.log(req.originalUrl)
  res.statusCode = 404

  res.render('error', {
    title: 'Error page',
    badLink: req.originalUrl,
    css: ['error', 'modal'],
  })
})

app.listen(3000, (err) => {
  if (err) {
    return console.error(err)
  }
  console.log(`http://localhost:3000`)
})
