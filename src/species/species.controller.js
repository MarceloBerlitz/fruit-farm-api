module.exports = (router, speciesService) => {
    router.post('/species', speciesService.create)
        .get('/species', speciesService.getAll)
        .get('/species/:id', speciesService.get)
        .delete('/species/:id', speciesService.delete);

    return router;
};
