import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import helmet from 'helmet'

//PaceProjects
import paceProjects from './app/models/paceProjectsModel'

let app = express()
app.use(helmet())

app.use(bodyParser.urlencoded({ extended: true, limit: '16mb' }))
app.use(bodyParser.json({ limit: '16mb' }))

let port = process.env.PORT || 3001
let dbURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pace-poc'

mongoose.Promise = global.Promise
mongoose.connect(dbURL).then()
app.use(function (req, res, next) {
  req.env = process.env.ENV || 'TEST'
  req.header('Content-Type', 'application/json')
  req.header('Accept', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PATCH,GET,PUT,DELETE,OPTIONS,POST')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

let paceProjectsRouter = require('./app/controllers/paceProjects') (paceProjects)
app.use('/api/paceprojects', paceProjectsRouter)

app.get('/', (req, res) => {
  res.send('Welcome to CDE-PACE!!!!')
})
  
app.listen(port, () => {
  console.log('Running on port:' + port)
})
 
module.exports = app