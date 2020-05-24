module.exports = (Species, Tree, Crop) => ({

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
        Species.findById(req.params.id).then(species => {
            res.send(species);
        });
    },

    delete: (req, res) => {
        Species.findById(req.params.id)
            .deleteOne()
            .then(result => {
                if (result.deletedCount) {
                    res.status(204);
                    res.send();
                } else {
                    res.status(404);
                    res.send({ message: 'Species not found.' });
                }
            }).catch(err => {
                res.status(500);
                res.send(err);
            });
    }

});
