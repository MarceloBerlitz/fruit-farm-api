const db = require('../db');
const Schema = require('mongoose').Schema;

const treeSchema = { 
    description: { type: String, required : true },
    date: { type: String, required: true },
    species: { type: Schema.Types.ObjectId, ref: 'Species' }
}

module.exports = db.model('Tree', treeSchema);
