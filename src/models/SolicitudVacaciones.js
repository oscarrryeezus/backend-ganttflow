const { Schema, model } = require('mongoose');

const solicitudvacacionesSchema = new Schema({
    NombreEmpleado:String,
    NombreAdmin: String,
    PeriodoSolicitado:{
        inicio: String,
        fin: String,    
    },
    EstadoSolicitud:String,
    Correo: String
});

const  SolicitudVacaciones = model('SolicitudVacaciones', solicitudvacacionesSchema);

module.exports = SolicitudVacaciones ;