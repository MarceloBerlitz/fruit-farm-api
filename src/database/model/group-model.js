const db = require('../index');
const Schema = require('mongoose').Schema;

const groupSchema = { 
    description: String,
    name: { type: String, required: true },
    trees: [{ type: Schema.Types.ObjectId, ref: 'Tree' }]
}

const Group = db.model('Group', groupSchema);

module.exports = Group;