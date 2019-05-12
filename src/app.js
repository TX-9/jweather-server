const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const resourceDirectoryPath = path.join(__dirname, '../resource')
const viewPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)

// Set up static directory to serve
app.use(express.static(resourceDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        ver: '1.0'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        desc: 'Help pages..'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'raining'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
