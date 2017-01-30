'use strict'

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ImageSchema=Schema({
  title:String,
  picture: String //Link de la imagen
  album: {type: Schema.ObjectId, ref: 'Album'}
});

module.exports=mongoose.mode('Image',ImageSchema);
