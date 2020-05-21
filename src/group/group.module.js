module.exports = db => ({
    service: {
        groupService: require('./group.service')(db.Tree, db.Crop, db.Group)
    }
});