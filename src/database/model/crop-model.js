const db = require('../index');
const Schema = require('mongoose').Schema;

const cropSchema = { 
    info: [{ type: String, required: true }],
    date: { type: String, required: true },
    grossWeight: { type: Number, required: true },
    tree: { type: Schema.Types.ObjectId, ref: 'Species' }
}

const Crop = db.model('Crop', cropSchema);

module.exports = Crop;