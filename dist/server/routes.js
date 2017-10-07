"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cat_1 = require("./controllers/cat");
var user_1 = require("./controllers/user");
var leafy_green_vegetables_1 = require("./controllers/leafy-green-vegetables");
var items_1 = require("./controllers/items");
function setRoutes(app) {
    var router = express.Router();
    var catCtrl = new cat_1.default();
    var userCtrl = new user_1.default();
    var leafyGreenVegetablesCtrl = new leafy_green_vegetables_1.default();
    var itemsCtrl = new items_1.default();
    // Cats
    router.route('/cats').get(catCtrl.getAll);
    router.route('/cats/count').get(catCtrl.count);
    router.route('/cat').post(catCtrl.insert);
    router.route('/cat/:id').get(catCtrl.get);
    router.route('/cat/:id').put(catCtrl.update);
    router.route('/cat/:id').delete(catCtrl.delete);
    // LeafyGreenVegetables
    router.route('/leafy-green-vegetables').get(leafyGreenVegetablesCtrl.getAll);
    router.route('/leafy-green-vegetables/count').get(leafyGreenVegetablesCtrl.count);
    router.route('/leafy-green-vegetables').post(leafyGreenVegetablesCtrl.insert);
    router.route('/leafy-green-vegetables/:id').get(leafyGreenVegetablesCtrl.get);
    router.route('/leafy-green-vegetables/:id').put(leafyGreenVegetablesCtrl.update);
    router.route('/leafy-green-vegetables/:id').delete(leafyGreenVegetablesCtrl.delete);
    // Items
    router.route('/items').get(itemsCtrl.getAll);
    router.route('/items/count').get(itemsCtrl.count);
    router.route('/items').post(itemsCtrl.insert);
    router.route('/items/:id').get(itemsCtrl.get);
    router.route('/items/:id').put(itemsCtrl.update);
    router.route('/items/:id').delete(itemsCtrl.delete);
    // Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id').delete(userCtrl.delete);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map