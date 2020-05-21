module.exports = (router, cropService) => {
    router.post('/crops', cropService.create)
      .get('/crops', cropService.getAll)
      .get('/crops/:id', cropService.get)
      .put('/crops/:id', cropService.edit)
      .delete('/crops/:id', cropService.delete);
}