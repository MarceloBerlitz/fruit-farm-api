const Species = require('../database/model/species-model');
const Tree = require('../database/model/tree-model');
const Crop = require('../database/model/crop-model');

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

    get: (req, res) => {

        const id = req.params.id;

        Species.findById(id).then(async species => {
            species.trees = await Tree.find({ species: id });
            species.crops = await Promise.all(species.trees
                .map(tree => Crop.find({ tree: tree._id }))
                .reduce((acc, cur) => [ ...acc, ...cur ], []));

            res.send(species);
        });
    },

    delete: (req, res) => {
        Species.findById(req.params.id).deleteOne().then(() => {
            res.status(204);
            res.send();
        });
    }

}
