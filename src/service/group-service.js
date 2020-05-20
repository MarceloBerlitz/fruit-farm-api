const Tree = require('../database/model/tree-model');
const Crop = require('../database/model/crop-model');
const Group = require('../database/model/group-model');

module.exports = {

    create: (req, res) => {
        new Group(req.body).save().then(result => {
            res.send(result);
        });
    },

    getAll: (req, res) => {
        Group.find().then(result => {
            res.send(result);
        });
    },

    get: (req, res) => {
        Group.findById(req.params.id)
            .then(async group => {

                group.crops = await Promise.all(group.trees
                    .map(tree => Crop.find({ tree: tree }))
                    .reduce((acc, cur) => [ ...acc, ...cur ], []));

                group.trees = await Promise.all(group.trees.map(tree => {
                    return Tree.findById(tree)
                }));

                res.send(group);
            });
    },

    edit: async (req, res) => {
        const group = await Group.findById(req.params.id);
        
        group.trees = req.body.trees;
        group.name = req.body.name;
        group.description = req.body.description;

        await group.save();

        res.send(group);
    },

    delete: (req, res) => {
        Group.findById(req.params.id).deleteOne().then(() => {
            res.status(204);
            res.send();
        });
    },

    setTrees: (req, res) => {
        const group = Group.findById(req.params.id);

        group.trees = req.body.trees;
        group.save();

        res.send(group);
    }
}
