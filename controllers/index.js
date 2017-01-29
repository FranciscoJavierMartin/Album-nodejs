'use strict'

var mongoose=require('mongoose');
var app=require('./app');
var port=process.env.PORT || 3700;

mongoose.connect('mongodeb://localhost:27017/albums',function(err,res){
  if(err){
    throw err;
  }else{
    console.log('Base de datos funcionando correctamente');

    app.listen(port,function(){
      console.log("API RESTfull de album conectada al puerto: "+port);
    });
  }
});
