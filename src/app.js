const express = require('express')
require('./db/mongo1')
productRouter = require('./routers/products')

const app = express()
 
app.use(express.json())
app.use(productRouter)

module.exports = app

