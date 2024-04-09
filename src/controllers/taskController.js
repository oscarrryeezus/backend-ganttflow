const Task = require('../models/Task');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Controlador para las operaciones relacionadas con las tareas
const taskController = {
  // Crear una nueva tarea
  createTask: async (req, res) => {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Obtener todas las tareas
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error al obtener todas las tareas:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Obtener una tarea por su ID
  getTaskById: async (req, res) => {
    const taskId = req.params.id;
    try {
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      res.status(200).json(task);
    } catch (error) {
      console.error('Error al obtener la tarea por ID:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Actualizar una tarea por su ID
  // Actualizar una tarea por su ID
  updateTask: async (req, res) => {
    const taskId = req.params.id;
    const updateData = req.body;
    try {
      // Verificar si el taskId es un número entero válido
      if (isNaN(taskId) || !Number.isInteger(parseFloat(taskId))) {
        return res.status(400).json({ error: 'ID de tarea inválido' });
      }

      // Buscar la tarea por el campo 'id' y actualizarla
      const updatedTask = await Task.findOneAndUpdate({ id: taskId }, updateData, { new: true });
      
      if (!updatedTask) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
  

  // Eliminar una tarea por su ID
  deleteTask: async (req, res) => {
    const taskId = req.params.id;
    try {
      // Buscar la tarea por el campo 'id'
      const task = await Task.findOne({ id: taskId });
      if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      // Eliminar la tarea utilizando el '_id' obtenido
      const deletedTask = await Task.findByIdAndDelete(task._id);
      res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};

module.exports = taskController;
