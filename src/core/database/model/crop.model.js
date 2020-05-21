const db = require('../db');
const Schema = require('mongoose').Schema;

const cropSchema = { 
    info: [{ type: String, required: true }],
    date: { type: String, required: true },
    grossWeight: { type: Number, required: true },
    tree: { type: Schema.Types.ObjectId, ref: 'Tree', required: true }
}

module.exports = db.model('Crop', cropSchema);
