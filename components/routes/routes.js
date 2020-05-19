const express = require('express');

const router = express.Router();

// species

router.post('/species', (req, res) => {
    res.send('this will create a species');
});

router.get('/species', (req, res) => {
    res.send('this will list all species');
});

router.get('/species/:id', (req, res) => {
    res.send('this will return an specific species details');
});

router.delete('/species/:id', (req, res) => {
    res.send('this will delete the species');
});

// trees

// groups

// crops

module.exports = router;