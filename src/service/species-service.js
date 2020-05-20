const Species = require('../database/model/species-model');

module.exports = {

    create: (req, res) => {
        new Species(req.body).save()
        .then(result => {
            res.send(result);
        });
    },

    getAll: (req, res) => {
        Species.find().then(result => {
            res.send(result);
        });
    },

    delete: (req, res) => {
        Species.findById(req.params.id).deleteOne().then(() => {
            res.status(204);
            res.send();
        });
    }

}
