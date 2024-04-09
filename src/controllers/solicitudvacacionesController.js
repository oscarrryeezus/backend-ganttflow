const SolicitudVacaciones = require('../models/solicitudvacaciones');

const solicitudVacacionesController = {

  create: async (req, res) => {
    try {
      const nuevaSolicitudVacaciones = new SolicitudVacaciones(req.body);
      const solicitudVacacionesGuardada = await nuevaSolicitudVacaciones.save();
      res.status(201).json({
        message: 'Solicitud de vacaciones creada exitosamente',
        solicitudVacacionesId: solicitudVacacionesGuardada
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear una nueva solicitud de vacaciones', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const solicitudesVacaciones = await SolicitudVacaciones.find();
      res.status(200).json(solicitudesVacaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todas las solicitudes de vacaciones', detalle: error.message });
    }
  },

  getByAdmin: async (req, res) => {
    try {
      const solicitudesVacaciones = await SolicitudVacaciones.find({ NombreAdmin: req.params.NombreAdmin });
      res.status(200).json(solicitudesVacaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todas las solicitudes de vacaciones', detalle: error.message });
    }
  },

  getByEmpleado: async (req, res) => {
    try {
      const solicitudesVacaciones = await SolicitudVacaciones.find({ NombreEmpleado: req.params.NombreEmpleado });
      res.status(200).json(solicitudesVacaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todas las solicitudes de vacaciones', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const solicitudVacaciones = await SolicitudVacaciones.find({ NombreEmpleado: req.params.NombreEmpleado });
      if (solicitudVacaciones) {
        res.status(200).json(solicitudVacaciones);
      } else {
        res.status(404).json({ error: 'Solicitud de vacaciones no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la solicitud de vacaciones', detalle: error.message });
    }
  },
  

  update: async (req, res) => {
    try {
      const solicitudVacacionesActualizada = await SolicitudVacaciones.findOneAndUpdate({ NombreEmpleado: req.params.NombreEmpleado }, req.body, { new: true });
      if (solicitudVacacionesActualizada) {
        res.status(200).json(solicitudVacacionesActualizada);
      } else {
        res.status(404).json({ error: 'Solicitud de vacaciones no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la solicitud de vacaciones', detalle: error.message });
    }
  },
  

  delete: async (req, res) => {
    try {
      const solicitudVacacionesEliminada = await SolicitudVacaciones.findOneAndDelete({ NombreEmpleado: req.params.NombreEmpleado });
      if (solicitudVacacionesEliminada) {
        res.status(200).json({
          message: 'Solicitud de vacaciones eliminada exitosamente',
          solicitudVacacionesId: solicitudVacacionesEliminada._id
        });
      } else {
        res.status(404).json({ error: 'Solicitud de vacaciones no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la solicitud de vacaciones', detalle: error.message });
    }
  },
  
};

module.exports = solicitudVacacionesController;
