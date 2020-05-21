module.exports = db => ({
    service: {
        cropService: require('./crop.service')(db.Crop)
    }
});