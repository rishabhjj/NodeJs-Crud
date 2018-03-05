'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _paceProjectsModel = require('./app/models/paceProjectsModel');

var _paceProjectsModel2 = _interopRequireDefault(_paceProjectsModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//PaceProjects

app.use((0, _helmet2.default)());

app.use(_bodyParser2.default.urlencoded({ extended: true, limit: '16mb' }));
app.use(_bodyParser2.default.json({ limit: '16mb' }));

var port = process.env.PORT || 3001;
var dbURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pace-poc';

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(dbURL).then(console.log("connected"));
app.use(function (req, res, next) {
  req.env = process.env.ENV || 'TEST';
  req.header('Content-Type', 'application/json');
  req.header('Accept', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PATCH,GET,PUT,DELETE,OPTIONS,POST');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

var paceProjectsRouter = require('./app/controllers/paceProjects')(_paceProjectsModel2.default);
app.use('/api/paceprojects', paceProjectsRouter);

app.get('/', function (req, res) {

  res.send("Welcome to CDE-PACE!!!!");
});

app.listen(port, function () {
  console.log('Running on port:' + port);
});

module.exports = app;