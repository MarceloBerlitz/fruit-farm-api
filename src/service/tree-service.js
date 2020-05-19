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
            res.send(err) 
        })
    },

    getAll: async (req, res) => {
        trees = await treeData.find();
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
    }

}