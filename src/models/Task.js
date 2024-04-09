const mongoose = require('mongoose');

// Definición del esquema para la colección de tareas
const TaskSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    parent: {
        type: Number,
        required: true
    }
});

// Modelo para la colección de tareas
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
