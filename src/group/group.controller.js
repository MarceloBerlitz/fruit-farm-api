module.exports = (router, groupService) => {
    router.post('/groups', groupService.create)
        .get('/groups', groupService.getAll)
        .get('/groups/:id', groupService.get)
        .put('/groups/:id', groupService.edit)
        .delete('/groups/:id', groupService.delete)
        .patch('/groups/:id/trees', groupService.setTrees);

    return router;
}