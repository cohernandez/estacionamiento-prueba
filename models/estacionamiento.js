var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var estacionamientoSchema = new Schema({
  ubicacion:{ type: [Number] },
  horario:  { desde: {type: String }, hasta: {type: String}},
  precio:   { type: Number },
    dias:    { type: String, enum:
    ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado', 'Domingo']
        },
  disponible: { type: Boolean },
  });

module.exports = mongoose.model('Estacionamiento', estacionamientoSchema);
// donde Estacionamiento es el nomre de la tablade los estacionamientos disponible con la variable que contiene la estructura del documento
