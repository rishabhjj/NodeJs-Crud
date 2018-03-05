'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _paceProjects = require('../routes/paceProjects');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(PaceProject) {
    try {
        var router = _express2.default.Router();

        router.route('/').get(function (req, res) {
            (0, _paceProjects.getPaceProjects)(PaceProject, req, res);
        }).post(function (req, res) {
            (0, _paceProjects.createPaceProjects)(PaceProject, req, res);
        });
        return router;
    } catch (err) {
        console.log(err);
    }
};
module.exports = routes;