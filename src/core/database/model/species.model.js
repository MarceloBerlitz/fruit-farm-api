const db = require('../db');

const speciesSchema = { 
    description: { type: String, required: true }
}

module.exports = db.model('Species', speciesSchema);
