var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect(process.env.MONGODB_CONNECT,
{ useNewUrlParser : true, useCreateIndex : true,useFindAndModify: false,
    useUnifiedTopology: true},()=>
{
    console.log("mongo connected");
})