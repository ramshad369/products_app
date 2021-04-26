const express = require('express')
const cors = require('cors');
require('./db/mongo1')
productRouter = require('./routers/products')

const app = express()
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PATCH',
      'DELETE'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
app.use(cors(corsOpts));
app.use(express.json())
app.use(productRouter)

module.exports = app

