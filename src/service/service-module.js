const Species = require('../database/model/species-model');
const Tree = require('../database/model/tree-model');
const Group = require('../database/model/group-model');
const Crop = require('../database/model/crop-model');

const speciesService = require('./species-service')(Species, Tree, Crop);
const treeService = require('./tree-service')(Species, Tree, Crop, Group);
const groupService = require('./group-service')(Tree, Crop, Group);
const cropService = require('./crop-service')(Crop);

module.exports = {
    speciesService: speciesService,
    treeService: treeService,
    groupService: groupService,
    cropService: cropService
}