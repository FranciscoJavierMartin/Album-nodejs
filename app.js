'use strict'

var express=require('express');
var bodyPaser=require('body-parser');

var app=express();

//Carga de rutas

app.use(bodyPaser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar cabeceras


//rutas base

module.exports=app;
