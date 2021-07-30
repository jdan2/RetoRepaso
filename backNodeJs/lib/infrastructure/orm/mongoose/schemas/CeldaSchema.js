const mongoose = require('../mongoose');

const celdaSchema = new mongoose.Schema({
  celdaId: { type: String },
  disponibilidad: { type: String },
  tipoCelda: { type: String }
});

module.exports = mongoose.model('Celda', celdaSchema);
