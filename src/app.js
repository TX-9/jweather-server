const path = require('path')
const express = require('express')

const app = express()
const resourceDirectoryPath = path.join(__dirname, '../resource')
app.use(express.static(resourceDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'raining'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
