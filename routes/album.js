'use strict'

var express=require('express');
var AlbumController=require('../controllers/album');
var api=express.Router();

api.get('/album/:id',AlbumController.getAlbum);
api.get('/albums',AlbumController.getAlbums);
api.post('/album',AlbumController.saveAlbum);

module.exports=api;
