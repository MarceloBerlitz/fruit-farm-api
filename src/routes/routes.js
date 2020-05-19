const express = require('express');

const router = express.Router();

const speciesService = require('../service/species-service')
const treeService = require('../service/tree-service')


// species

router.post('/species', speciesService.create);

router.get('/species', speciesService.getAll);

router.delete('/species/:id', speciesService.delete);

// trees

router.post('/trees', treeService.create)

router.get('/trees', treeService.getAll)

router.get('/trees/:id', treeService.get)

// groups

// crops

module.exports = router;