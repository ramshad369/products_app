const express = require('express')
const cors = require('cors');
require('./db/mongo1')
productRouter = require('./routers/products')

const app = express()
app.use(cors());
app.options('*', cors());
app.use(express.json())
app.use(productRouter)

module.exports = app

