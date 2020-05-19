const db = require('../index');
const Schema = require('mongoose').Schema;

const treeSchema = { 
    description: String,
    date: String,
    species: { type: Schema.Types.ObjectId, ref: 'Species' }
}

const Tree = db.model('Tree', treeSchema);

module.exports = Tree;