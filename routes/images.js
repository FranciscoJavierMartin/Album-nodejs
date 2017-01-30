'use strict'

var express=require('express');
var ImageController=require('../controllers/image');
var api=express.Router();

api.get('/pruebas-image',ImageController.pruebas);
api.get('/image/:id',ImageController.getImage);
api.post('/image',ImageController.saveImage);

module.exports=api;