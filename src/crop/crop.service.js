module.exports = Crop => ({

    create: (req, res) => {
        new Crop(req.body).save().then(result => {
            res.send(result);
        });
    },

    getAll: (req, res) => {
        Crop.find().then(result => {
            res.send(result);
        });
    },

    get: (req, res) => {
        Crop.findById(req.params.id).then(result => {
            res.send(result);
        });
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
