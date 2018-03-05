let mongoose = require('mongoose')
let Schema = mongoose.Schema
let patcher = require('mongoose-json-patch')

let PaceProjects = new Schema({
    projName: { type: String , required: [true, 'Project Name is required']},
    headCount: { type: Number , required: [true, 'Number of Reource is required']},
    startDate: { type: Date },
    endDate: { type: Date },
    modifiedDate: { type: Date}
  })
  PaceProjects.plugin(patcher)

module.exports = mongoose.model('Pace-Projects', PaceProjects)