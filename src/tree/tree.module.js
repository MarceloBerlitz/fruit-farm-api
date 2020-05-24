module.exports = db => ({
    service: {
        treeService: require('./tree.service')(db.Species, db.Tree, db.Group)
    }
});