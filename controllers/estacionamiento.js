cd//File: controllers/tvshows.js
//Aca van todas las funciones tales como si fuesen control remoto, las cuales son llamadas como funciones

var mongoose = require('mongoose');
var Estacionamiento  = mongoose.model('Estacionamiento');

//GET - Return all tvshows in the DB
exports.findAllEstacionamientos = function(req, res) {
    Estacionamiento.find(function(err, estacionamientos) {
    if(err) res.send(500, err.message);

    console.log('GET /tvshows')
        res.status(200).jsonp(estacionamientos);
    });
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
    Estacionamiento.findById(req.params.id, function(err, estacionamiento) {
    if(err) return res.send(500, err.message);

    console.log('GET /tvshow/' + req.params.id);
        res.status(200).jsonp(Estacionamiento);
    });
};

//POST - Insert a new TVShow in the DB
exports.addEstacionamiento = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var Estacionamiento = new Estacionamiento({
        ubicacion:    req.body.ubicacion,
        horario:  req.body.horario,
        precio:     req.body.precio,
        dias:   req.body.dias,
        disponible:  req.body.disponible,
    });
    Estacionamiento.save(function(err, estacionamiento) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(estacionamiento);
    });
};

//PUT - Update a register already exists
exports.updateEstacionamiento  = function(req, res) {
    Estacionamiento.findById(req.params.id, function(err, estacionamiento) {
      estacionamiento.ubicacio=   req.body.ubicacion;
      estacionamiento.horario=  req.body.horario;
      estacionamiento.precio=     req.body.precio;
      estacionamiento.dias=   req.body.dias;
      estacionamiento.disponible=  req.body.disponible;

        estacionamiento.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(estacionamiento);
        });
    });
};

//DELETE - Delete a TVShow with specified ID
exports.deleteEstacionamiento = function(req, res) {
    Estacionamiento.findById(req.params.id, function(err, estacionamiento) {
        estacionamiento.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send("Eliminado correctamente");
        })
    });
};
