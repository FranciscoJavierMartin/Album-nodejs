'use strict'

var express=require('express');
var ImageController=require('../controllers/image');
var api=express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir:'./uploads'});

api.get('/pruebas-image',ImageController.pruebas);
api.get('/image/:id',ImageController.getImage);
api.post('/image',ImageController.saveImage);
api.get('/image/:album?',ImageController.getImages);
api.put('/image/:id',ImageController.updateImage);
api.delete('/image/:id',ImageController.deleteImage);
api.post('upload-image/:id',multipartMiddleware,ImageController.uploadImage);
api.get('/get-image/:imageFile',multipartMiddleware,ImageController.getImageFile);

module.exports=api;
