const speciesDb = require('../database/model/species-model');

module.exports = {

    create: (req, res) => {
        new speciesDb(req.body).save().then(result => {
            res.send(result);
        });
    },

    getAll: (req, res) => {
        speciesDb.find().then(result => {
            res.send(result);
        })
    },

    delete: (req, res) => {
        speciesDb.findById(req.params.id).remove().then(result => {
            res.status(204);
            res.send();
        })
    }

}