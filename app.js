'use strict'

var express=require('express');
var bodyPaser=require('body-parser');

var app=express();

//Carga de rutas
var album_routes=require('./routes/album');
var image_routes=require('./routes/image');

app.use(bodyPaser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar cabeceras


//rutas base
app.use('/api',album_routes);
app.use('/api',image_routes);

module.exports=app;
