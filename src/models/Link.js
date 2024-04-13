const mongoose = require('mongoose');

// Definición del esquema para la colección de enlaces
const LinkSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    source: {
        type: Number,
        required: true
    },
    target: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

// Modelo para la colección de enlaces
const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;
