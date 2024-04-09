const Link = require('../models/Link');

// Controlador para las operaciones de la colección de enlaces
const linkController = {
    // Obtener todos los enlaces
    getAllLinks: async (req, res) => {
        try {
            const links = await Link.find();
            res.status(200).json(links);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Crear un nuevo enlace
    createLink: async (req, res) => {
        const { id, source, target, type } = req.body;
        try {
            const newLink = new Link({ id, source, target, type });
            await newLink.save();
            res.status(201).json(newLink);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Actualizar un enlace existente
    updateLink: async (req, res) => {
        const { id } = req.params;
        const { source, target, type } = req.body;
        try {
            const updatedLink = await Link.findOneAndUpdate(
                { id },
                { source, target, type },
                { new: true }
            );
            res.status(200).json(updatedLink);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Eliminar un enlace existente
    deleteLink: async (req, res) => {
        const { id } = req.params;
        try {
            await Link.findOneAndDelete({ id });
            res.status(204).end();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = linkController;
