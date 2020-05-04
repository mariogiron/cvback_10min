const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let proyectoSchema = new Schema({
    titulo: String
});

module.exports = mongoose.model('Proyecto', proyectoSchema);