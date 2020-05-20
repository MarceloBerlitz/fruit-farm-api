const treeData = require('../database/model/tree-model');
const groupData = require('../database/model/group-model');

module.exports = {

    create: (req, res) => {
        new groupData(req.body).save().then(result => {
            res.send(result);
        })
    },

    getAll: (req, res) => {
        groupData.find().then(result => {
            res.send(result);
        });
    },

    get: (req, res) => {
        groupData.findById(req.params.id)
            .then(async group => {
                group.trees = await Promise.all(group.trees.map(tree => {
                    return treeData.findById(tree)
                }));

                res.send(group);
            })
    },

    delete: (req, res) => {
        groupData.findById(req.params.id).deleteOne().then(() => {
            res.status(204);
            res.send();
        })
    }
}