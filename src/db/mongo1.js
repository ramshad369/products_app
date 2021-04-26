var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://*********@********.mongodb.net/product-app-api? 
         retryWrites=true', {useNewUrlParser: true});
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
// })