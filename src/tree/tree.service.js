const mongoose = require('mongoose');

module.exports = (Species, Tree, Crop, Group) => {

    return ({
        create: (req, res) => {
            Species.findById(req.body.species).catch(err => {
                res.status(404);
                res.send({ message: 'Espécie não contrada.' });
            });

            new Tree(req.body).save().then(result => {
                res.send(result);
            }).catch(err => {
                res.status(500);
                res.send(err);
            })
        },

        getAll: async (req, res) => {
            let trees;
            if (req.query.group) {
                trees = await Group.findById(req.query.group).then(group => {
                    if (!group) {
                        res.status(404);
                        res.send({ message: 'Grupo não encontrado.' })
                    }
                    return Tree.find().where('_id').in(group.trees.map(tree => mongoose.Types.ObjectId(tree)));
                }).catch(err => {
                    res.status(500);
                    res.send({ message: 'Ocorreu um erro interno.' })
                });
            } else if (req.query.species) {
                trees = await Tree.find({ 'species': req.query.species });
            } else {
                trees = await Tree.find().lean();
            }

            await Promise.all(trees.map(async tree => {
                tree.species = await Species.findById(tree.species);
            }));
            res.send(trees);
        },

        get: async (req, res) => {
            tree = await Tree.findById(req.params.id);
            tree.species = await Species.findById(tree.species);
            res.send(tree);
        },

        edit: async (req, res) => {
            const tree = await Tree.findById(req.params.id);

            tree.description = req.body.description;
            tree.date = req.body.date;
            tree.species = req.body.species;

            await tree.save();

            res.send(tree);
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
                        res.send({ message: 'Árvore não encontrada.' });
                    }
                }).catch(err => {
                    res.status(500);
                    res.send(err);
                });
        }
    })
};
