const mongoose = require('../mongoose');

const tiqueteSchema = new mongoose.Schema({
  horaIngreso: { type: String },
  placa: { type: String },
  celda: { type: String },
  tipoVehiculo: { type: String },
});

module.exports = mongoose.model('Tiquete', tiqueteSchema);
