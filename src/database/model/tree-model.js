const db = require('../index');
const Schema = require('mongoose').Schema;

const treeSchema = { 
    description: { type: String, required : true },
    date: { type: String, required: true },
    species: { type: Schema.Types.ObjectId, ref: 'Species' }
}

const Tree = db.model('Tree', treeSchema);

module.exports = Tree;