const Actividades = require('../models/Actividades')

const actividadesController = {
    create: async (req, res) => {
        try {
          const nuevoActividad = new Actividades(req.body);
          const actividadGuardado = await nuevoActividad.save();
          res.status(201).json({
            message: 'Actividad creado exitosamente',
            actividadId: actividadGuardado.NombreActividad
          });
        } catch (error) {
          res.status(500).json({ error: 'Error al crear un nuevo Actividad', detalle: error.message });
        }
    },
    

  getAll: async (req, res) => {
    try {
      const actividades = await Actividades.find();
      res.status(200).json(actividades);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos las Actividad', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const Actividad = await Actividades.findOne({ NombreActividad: req.params.NombreDepartamento });
      if (Actividad) {
        res.status(200).json(Actividad);
      } else {
        res.status(404).json({ error: 'Actividad no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la Actividad', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const actividadActualizado = await Actividades.findOneAndUpdate(
        { NombreActividad: req.params.NombreActividad }, // Filtro de búsqueda
        req.body, // Datos a actualizar
        { new: true } // Opciones: Devolver el documento actualizado
      );
      if (actividadActualizado) {
        res.status(200).json(actividadActualizado);
      } else {
        res.status(404).json({ error: 'Actividad no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la Actividad', detalle: error.message });
    }
},
  

  delete: async (req, res) => {
    try {
      const actividadEliminado = await Actividades.findOneAndDelete({ NombreActividad: req.params.NombreActividad });
      if (actividadEliminado) {
        res.status(200).json({
          message: 'Actividad eliminado exitosamente',
          actividadId: actividadEliminado.NombreActividad
        });
      } else {
        res.status(404).json({ error: 'Actividad no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la Actividad', detalle: error.message });
    }
}
};

module.exports = actividadesController;