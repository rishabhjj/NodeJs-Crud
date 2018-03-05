'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var patcher = require('mongoose-json-patch');

var PaceProjects = new Schema({
    projName: { type: String, required: [true, 'Project Name is required'] },
    headCount: { type: Number, required: [true, 'Number of Reource is required'] },
    startDate: { type: Date },
    endDate: { type: Date },
    modifiedDate: { type: Date }
});
PaceProjects.plugin(patcher);

module.exports = mongoose.model('Pace-Projects', PaceProjects);