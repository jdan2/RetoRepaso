const mongoose = require('../mongoose');

const tiqueteSchema = new mongoose.Schema({
  tiqueteId: { type: String },
  celdaId: { type: String },
  tipoVehiculo: { type: String },
  placa: { type: String },
  horaIngreso: { type: String },
});

module.exports = mongoose.model('Tiquete', tiqueteSchema);
