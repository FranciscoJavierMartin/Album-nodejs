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

module.exports={
  getAlbum,
  getAlbums
}
