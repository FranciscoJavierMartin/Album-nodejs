'use strict'

var express=require('express');
var bodyPaser=require('body-parser');

var app=express();

//Carga de rutas
var album_routes=require('./routes/album');


app.use(bodyPaser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar cabeceras


//rutas base
app.use('/api',album_routes);


module.exports=app;
