const db = require('../index');

const speciesSchema = { 
    description: String
}

const Species = db.model('Species', speciesSchema);

module.exports = Species;