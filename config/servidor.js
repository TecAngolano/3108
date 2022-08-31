const express = require('express')

const app = express()

const porta = process.env.PORT || 3030

const consign = require('consign')

app.use(express.urlencoded({extended:false}))

consign().include('./routes').into(app)

app.use(express.static('./src/'))


module.exports = {app, porta}