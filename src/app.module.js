const db = require('./core/core.module').database;

module.exports = express => {
    const cropModule = require('./crop/crop.module')(db);
    const groupModule = require('./group/group.module')(db);
    const speciesModule = require('./species/species.module')(db);
    const treeModule = require('./tree/tree.module')(db);

    const router = express.Router();

    require('./crop/crop.controller')(router, cropModule.service.cropService);
    require('./group/group.controller')(router, groupModule.service.groupService);
    require('./species/species.controller')(router, speciesModule.service.speciesService);
    require('./tree/tree.controller')(router, treeModule.service.treeService);

    return router;
}