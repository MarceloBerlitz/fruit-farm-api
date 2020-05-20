const Species = require('../database/model/species-model');
const Tree = require('../database/model/tree-model');
const Group = require('../database/model/group-model');
const Crop = require('../database/model/crop-model');

module.exports = {

    create: (req, res) => {
        // const species = speciesData.findById(req.body.species);
        //to do: validate species

        new Tree(req.body).save().then(result => {
            res.send(result);
        }).catch(err => { 
            res.status(500); 
            res.send(err);
        })
    },

    getAll: async (req, res) => {
        const trees = await Tree.find();
        Promise.all(trees.map(async tree => {
           tree.species = await Species.findById(tree.species)
        })).then(() => {
            res.send(trees);
        });
    },

    get: async (req, res) => {

        const id = req.params.id;

        tree = await Tree.findById(id);
        tree.groups = await Group.find({ trees: id });
        tree.crops = await Crop.find({ tree: id })
        tree.species = await Species.findById(tree.species);
        res.send(tree);
    },

    edit: async (req, res) => {
        const tree = await Tree.findById(req.params.id);

        tree.description = req.body.description;
        tree.date = req.body.date;
        tree.species = req.body.species;

        await tree.save();

        res.send(tree)
    },

    delete: (req, res) => {
        Tree.findById(req.params.id)
            .deleteOne()
            .then(result => {
                if (result.deletedCount) {
                    res.status(204);
                    res.send();
                } else {
                    res.status(404);
                    res.send({ message: 'Tree not found.' });
                }
            }).catch(err => {
                res.status(500);
                res.send(err);
            });
    }

}
