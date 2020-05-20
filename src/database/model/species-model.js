const db = require('../index');

const speciesSchema = { 
    description: { type: String, required: true }
}

const Species = db.model('Species', speciesSchema);

module.exports = Species;