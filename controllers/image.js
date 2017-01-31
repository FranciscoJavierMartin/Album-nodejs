'use strict'

var path=require('path');
var Image = require('../models/image');
var Album = require('../models/album');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Pruebas de controlador de imagenes'
    });
}


function getImage(req, res) {
    var ImageId = req.params.id;

    Image.findById(imageId, function(err, image) {
        if (err) {
            res.status(500).send({
                message: 'Error en la peticion'
            });
        } else {
            if (!image) {
                res.status(404).send({
                    message: 'No existe la imagen'
                });
            } else {
                Album.populate(image, {
                    path: 'album'
                }, function(err, image) {
                    if (err) {
                        res.status(500).send({
                            message: 'Error en la peticion'
                        });
                    } else {
                        res.status(200).send({
                            image
                        });
                    }
                });

            }
        }
    });
}

function getImages(req,res){
  var albumId=req.params.album;

  if(!albumId){
    //Sacar todas las imagenes de la base de datos
    Image.find({}).sort('title').exec(function(err,images){
      if(err){
        res.status(500).send({message:'Error en la peticion'});
      }else{
        if(!images){
          res.status(404).send({message:'No el album'});
        }else{
          Album.populate(images,{path:'album'},function(err,images){
            if(err){
              res.status(500).send({message: 'Error en la peticion'});
            }else{
              res.status(200).send({images});
            }
          });
        }
      }
    });
  }else{
    //Sacar todas las imagenes asociadas al album
    Image.find({album: albumId}).sort('title').exec(function(err,images){
      if(err){
        res.status(500).send({message:'Error en la peticion'});
      }else{
        if(!images){
          res.status(404).send({message:'No hay imagenes en este album'});
        }else{
          res.status(200).send({images});
        }
      }
    });
  }
}

function saveImage(req, res) {
    var image = new Image();
    var params = req.body;

    image.title = params.title;
    image.picture = null;
    image.album = params.album;

    image.save(function(err, imageStored) {
        if (err) {
            res.status(500).send({
                message: 'Error en la peticion'
            });
        } else {
            if (!imageStored) {
                res.status(404).send({
                    message: 'No se ha podido guardar la imagen'
                });
            } else {
                res.status(200).send({
                    image: imageStored
                });
            }
        }
    });

}

function updateImage(req,res){
  var imageId=req.params.id;
  var update=req.body;

  Image.findByIdAndUpdate(imageId,update,function(err,imageUpdated){
    if(err){
      res.status(500).send({message: 'Error en la peticion'});
    }else{
      if(!imageUpdated){
        res.status(404).send({message: 'No se ha podido actualizar la imagen'});
      }else{
        res.status(200).send({image:imageUpdated});
      }
    }
  });
}

function deleteImage(req,res){
  var imageId=req.params.id;

  Image.findByIdAndRemove(imageId,function(err,imageRemoved){
    if(err){
      res.status(500).send({message:'Error al borrar la imagen'});
    }else{
      if(!imageremoved){
        res.status(404).send({message: 'No se ha podido eliminar la imagen'});
      }else{
        res.status(200).send({image:imageRemoved});
      }
    }
  });
}

function uploadImage(req,res){
  var imageId=req.params.id;
  var file_name='No subido';

//Acceso a los ficheros que llegan desde la peticion
  if(req.files){
    var file_path=req.files.image.params.path;
    var file_split=file_path.split('\\');
    var file_name=file_split[1];

    Image.findByIdAndUpdate(imageId,{picture: file_name},function(err,imageUpdated){
      if(err){
        res.status(500).send({message: 'Error en la peticion'});
      }else{
        if(!imageUpdated){
          res.status(404).send({mesagge: 'No se ha podido actualizar la imagen'});
        }else{
          res.status(200).send({image:imageUpdated});
        }
      }
    });
  }else{
    res.status(200).send({message:'No has subido ninguna imagen'});
  }
}

module.exports = {
    pruebas,
    getImage,
    saveImage,
    getImages,
    updateImage,
    deleteImage,
    uploadImage
};
