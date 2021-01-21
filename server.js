const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/herlpers')



app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

//Ports
const port = process.env.PORT || 3000



//Express Hbs engine
hbs.registerPartials(__dirname + '/views/partials')
app.get('/', (req, res) => {

    res.render('home', {
        name: 'Jhonny',
        anio: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {

    res.render('about', {
        name: 'Jhonny',
        anio: new Date().getFullYear()
    })
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})