const express = require('express');
const router = express.Router();

const speciesService = require('../service/species-service');
const treeService = require('../service/tree-service');
const groupService = require('../service/group-service');
const cropService = require('../service/crop-service');

// species

router.post('/species', speciesService.create)
      .get('/species', speciesService.getAll)
      .get('/species/:id', speciesService.get)
      .delete('/species/:id', speciesService.delete);

// trees

router.post('/trees', treeService.create)
      .get('/trees', treeService.getAll)
      .get('/trees/:id', treeService.get)
      .put('/trees/:id', treeService.edit)
      .delete('/trees/:id', speciesService.delete);

// groups

router.post('/groups', groupService.create)
      .get('/groups', groupService.getAll)
      .get('/groups/:id', groupService.get)
      .put('/groups/:id', groupService.edit)
      .delete('/groups/:id', groupService.delete)
      .patch('/groups/:id/trees', groupService.setTrees);

// crops

router.post('/crops', cropService.create)
      .get('/crops', cropService.getAll)
      .get('/crops/:id', cropService.get)
      .put('/crops/:id', cropService.edit)
      .delete('/crops/:id', cropService.delete)

module.exports = router;
