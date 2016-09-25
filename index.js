// primero ewl extress
//Despues lo otro
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
        mongoose = require('mongoose');
var models = require('./models/estacionamiento')(app,mongoose);
var EstacionamientoCtrl = require('./controllers/estacionamiento');

//var para definir una variable

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var router = express.Router();
router.get('/', function(req, res) {
   res.send("Bienvenido a la aplicación de estacionamientos!");
});


app.use(router);

// API routes
var estacionamientos = express.Router();

estacionamientos.route('/estacionamientos')
  .get(EstacionamientoCtrl.findAllEstacionamientos)
  .post(EstacionamientoCtrl.addEstacionamiento);

estacionamientos.route('/estacionamientos/:id')
  .get(EstacionamientoCtrl.findById)
  .put(EstacionamientoCtrl.updateEstacionamiento)
  .delete(EstacionamientoCtrl.deleteEstacionamiento);

app.use('/api', estacionamientos);


mongoose.connect('mongodb://localhost/estacionamientos', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }

});

  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
