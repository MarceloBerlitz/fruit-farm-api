const speciesDb = require('../database/model/species-model');

const treeData = require('../database/model/tree-model');

module.exports = {

    create: (req, res) => {
        // const species = speciesData.findById(req.body.species);
        //to do: validate species

        new treeData(req.body).save().then(result => {
            res.send(result);
        }).catch(err => { 
            res.status(500); 
            res.send(err);
        })
    },

    getAll: async (req, res) => {
        const trees = await treeData.find();
        Promise.all(trees.map(async tree => {
           tree.species = await speciesDb.findById(tree.species)
        })).then(() => {
            res.send(trees);
        });
    },

    get: async (req, res) => {
        tree = await treeData.findById(req.params.id);
        tree.species = await speciesDb.findById(tree.species);
        res.send(tree);
    },

    edit: async (req, res) => {
        const tree = await treeData.findById(req.params.id);

        tree.description = req.body.description;
        tree.date = req.body.date;
        tree.species = req.body.species;

        await tree.save();

        res.send(tree)
    },

    delete: (req, res) => {
        treeData.findById(req.params.id).deleteOne().then(() => {
            res.status(204);
            res.send();
        })
    }

}