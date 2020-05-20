const express = require('express');

const router = express.Router();

const speciesService = require('../service/species-service')
const treeService = require('../service/tree-service')
const groupService = require('../service/group-service')

// species

router.post('/species', speciesService.create)
      .get('/species', speciesService.getAll)
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
      .delete('/groups/:id', groupService.delete)

// crops

module.exports = router;