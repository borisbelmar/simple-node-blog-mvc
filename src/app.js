const express = require('express')
const path = require('path')
const morgan = require('morgan')
const hbs = require('hbs')

const router = require('./router')

const app = express()

hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)

module.exports = app
