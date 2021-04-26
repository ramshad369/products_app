var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ramshadak:5267447689@cluster0.oki83.mongodb.net/products-app-api?retryWrites=true&w=majority',
{useNewUrlParser: true,useCreateIndex : true,useFindAndModify: false,
        useUnifiedTopology: true},);
         mongoose.connection.once('open', function(){
         console.log('Conection has been made!');
             }).on('error', function(error){
          console.log('Error is: ', error);
           });
// mongoose.connect(process.env.MONGODB_CONNECT,
// { useNewUrlParser : true, useCreateIndex : true,useFindAndModify: false,
//     useUnifiedTopology: true},()=>
// {
//     console.log("mongo connected");
// }