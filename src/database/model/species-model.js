const db = require('../index');

const speciesSchema = { 
    description: { type: String, required: true }
}

module.exports = db.model('Species', speciesSchema);
