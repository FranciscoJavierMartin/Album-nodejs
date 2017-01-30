'use strict'

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

module.exports = {
    pruebas,
    getImage,
    saveImage
};
