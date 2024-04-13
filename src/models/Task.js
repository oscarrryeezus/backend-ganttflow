const mongoose = require('mongoose');

// Definición del esquema para la colección de tareas
const TaskSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    start_date: {
        type: String,
    },
    end_date: {
        type: String,
    },
    text: {
        type: String,
    },
    progress: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    parent: {
        type: Number,
    },
    empleado: {
        type: String,
    },
    departamento:{
        type: String,
    },
    contrato: {
        type: String,
    },
    sede: {
        type: String,
    }
});

// Modelo para la colección de tareas
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
