module.exports = db => ({
    service: {
        cropService: require('./crop.service')(db.Crop, db.Group, db.Tree, db.Species)
    }
});