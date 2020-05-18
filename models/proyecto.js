const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let proyectoSchema = new Schema({
    titulo: String,
    descripcion: String,
    url: String,
    cliente: String,
    url_cliente: String,
    categoria: {
        type: String,
        enum: ['angular', 'wordpress', 'nodejs', 'frontend', 'backend']
    }
});

module.exports = mongoose.model('Proyecto', proyectoSchema);