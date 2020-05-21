module.exports = db => ({
    service: {
        speciesService: require('./species.service')(db.Species, db.Tree, db.Crop)
    }
});