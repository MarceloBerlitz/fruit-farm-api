module.exports = (Group) => ({

    create: (req, res) => {
        new Group(req.body).save().then(result => {
            res.send(result);
        });
    },

    getAll: async (req, res) => {
        let groups = [];
        try {
            if (req.query.tree) {
                groups = await Group.find({ 'trees': req.query.tree })
            } else {
                groups = await Group.find();
            }
            res.send(groups);
        } catch (err) {
            res.status(500);
            res.send({ message: 'Houve um erro interno.' });
        }
    },

    get: (req, res) => {
        Group.findById(req.params.id)
            .then(group => {
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
        Group.findById(req.params.id)
            .deleteOne()
            .then(result => {
                if (result.deletedCount) {
                    res.status(204);
                    res.send();
                } else {
                    res.status(404);
                    res.send({ message: 'Group not found.' });
                }
            }).catch(err => {
                res.status(500);
                res.send(err);
            });
    },

    setTrees: (req, res) => {
        const group = Group.findById(req.params.id);

        group.trees = req.body.trees;
        group.save();

        res.send(group);
    }
});
