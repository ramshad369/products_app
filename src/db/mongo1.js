var mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,
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