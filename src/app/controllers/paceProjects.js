import express from 'express'
import { getPaceProjects, createPaceProjects, updatePaceProject, removeProject } from '../routes/paceProjects'

let routes = function (PaceProject) {
  try {
        let router = express.Router()

        router.route('/')
        .get(function (req, res) {
          getPaceProjects(PaceProject, req, res)
        })
        .post(function (req, res) {
          createPaceProjects(PaceProject, req, res)
        })
        
    router.route('/:id')
    .patch(function (req, res) {
        updatePaceProject(PaceProject, req, res)
    })
    .delete(function (req, res) {
        removeProject(PaceProject, req, res)
    })
        return router
    } catch (err) {
        console.log(err)
    }
}
module.exports = routes