module.exports = (router, treeService) => {
    router.post('/trees', treeService.create)
        .get('/trees', treeService.getAll)
        .get('/trees/:id', treeService.get)
        .put('/trees/:id', treeService.edit)
        .delete('/trees/:id', treeService.delete);

    return router;
}