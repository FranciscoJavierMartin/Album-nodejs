'use strict'

var Album=require('../models/album');

function getAlbum(req,res){
  var albumId=req.params.id;

  Album.findById(albumId,function(err,album){
    if(err){
      res.status(500).send({
        message: "Error en la peticion"
      });
    }else{
      if(!album){
        res.status(404).send({
          message: "El abum no existe"
        });
      }else{
        res.status(200).send({album});
      }
    }
  });
}

function getAlbums(req,res){

  Album.find({},function(err,albums){
    if(err){
      res.status(500).send({message:'Error en la peticion'});
    }else {
      if(!albums){
        res.status(404).send({message: 'No exiten albumes'});
      }else{
        res.status(200).send({albums});
      }
    }
  });

}

function saveAlbum(res,res){
  var album=new Album();
  var params=req.body;

  album.title=params.title;
  album.description=params.description;

  album.save(function(err,albumStored){
    if(err){
      res.status(500).send({message: 'Error al guardar el album'});
    }else{
      if(!albumStored){
        res.status(404).send({message: 'No se ha guardado el album'});
      }else{
        res.status(200).send({album: albumStored});
      }
    }
  });
}

function updateAlbum(req,res){
  var albumId=req.params.id;
  var update=req.body;

  Album.findByIdAndUpdate(albumId,update,function(err,albumUpdated){
    if(err){
      res.status(500).send({message: 'Error en actualizacion del album'});
    }else {
      if(albumUpdated){
        res.status(404).send({message:'No se ha podido actualizar el album'});
      }else{
        res.status(200).send({
          album:albumUpdated
        });
      }
    }
  });
}

module.exports={
  getAlbum,
  getAlbums,
  saveAlbum,
  updateAlbum
}
