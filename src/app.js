const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const resourceDirectoryPath = path.join(__dirname, '../resource')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

// Set up static directory to serve
app.use(express.static(resourceDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Jacob',
        ver: '1.0'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        author: 'Jacob'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        author: 'Jacob',
        helpTest: 'Help pages..'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        title: 'Weather',
        author: 'Jacob',
        forecast: 'raining'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
