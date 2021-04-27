var mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
     name : {type: String,
                   required: true,
                   trim: true
                    },
     description : {type: String,
                  required: true,
                  trim: true
                    },
     price : {type: Number,
                        required: true,
                        trim: true
                          },

                        })

var Product = mongoose.model('products',productSchema)

module.exports = Product