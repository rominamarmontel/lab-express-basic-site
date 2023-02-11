const express = require('express')
const hbs = require('hbs')
const { mainModule } = require('process')
const path = require('path')

const app = express()

app.use(express.static(`${__dirname}/public`))
app.set('view engine', 'hbs')
//hbs.registerPartials(`${__dirname}/views/partials`)
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))//partialsは分割されたパーツ（navbarやfooter）

app.get('/', (request, response) => {
  response.render('home', {
    navbar: true,
    title: 'AKI KURODA - Home',//siteのバーに表示される
    css: "main.css",
  })
})

app.get('/about', (req, res) => {
  console.log(req.query)
  res.render('about', { 
    navbar: true,
    title: 'AKI KURODA - About',
    css: "main.css",
  })
})

app.get('/works', (req, res) => {
  console.log(req.query)
  res.render('works', { 
    navbar: true,
    title: 'AKI KURODA - Works',
    css: "main.css" 
   })
})

app.get('/photo', (req, res) => {
  console.log(req.query)
  res.render('photo', { 
    navbar: true,
    title: 'AKI KURODA - Photo Gallery',
    css: "main.css"  
  })
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
