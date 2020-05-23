module.exports = db => ({
    service: {
        groupService: require('./group.service')(db.Group)
    }
});