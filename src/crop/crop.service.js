module.exports = (Crop, Group, Tree, Species) => ({

    create: (req, res) => {
        new Crop(req.body).save().then(result => {
            res.send(result);
        });
    },

    getAll: async (req, res) => {
        let crops = [];
        try {
            if (req.query.group) {
                const group = await Group.findById(req.query.group);
                crops = await Crop.find().where('tree').in(group.trees);
            } else if (req.query.tree) {
                crops = await Crop.find({ 'tree': req.query.tree });
            } else if (req.query.species) {
                const trees = await Tree.find({ 'species': req.query.species });
                crops = await Crop.find({ 'tree': trees.map(tree => tree._id) })
            }
             else {
                crops = await Crop.find();
            }

            await Promise.all(crops.map(async crop => {
                crop.tree = await Tree.findById(crop.tree);
            }));
            res.send(crops);

        } catch (err) {
            res.status(500);
            res.send({ message: 'Ocorreu um erro interno.' })
        }     
    },

    get: async (req, res) => {
        const crop = await Crop.findById(req.params.id);
        crop.tree = await Tree.findById(crop.tree);
        res.send(crop);
    },

    edit: async (req, res) => {
        const crop = await Crop.findById(req.params.id);

        crop.info = req.body.info;
        crop.date = req.body.date;
        crop.grossWeight = req.body.grossWeight;
        crop.tree = req.body.tree;

        await crop.save()
            
        res.send(crop);
    },

    delete: (req, res) => {
        Crop.findById(req.params.id)
            .deleteOne()
            .then(result => {
                if (result.deletedCount) {
                    res.status(204);
                    res.send();
                } else {
                    res.status(404);
                    res.send({ message: 'Crop not found.' });
                }
            }).catch(err => {
                res.status(500);
                res.send(err);
            });
    }

});
