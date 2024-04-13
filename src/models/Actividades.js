const mongoose = require('mongoose');

const actividadesSchema = new mongoose.Schema({
  NombreActividad: String,
  HorarioTraining: {
    Fecha: String,
    HoraInicial: String,
    HoraFinal: String
  },
  Duracion: Number,
  Empleado: String
});

module.exports = mongoose.model('actividad', actividadesSchema);