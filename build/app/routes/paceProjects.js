"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPaceProjects = getPaceProjects;
exports.createPaceProjects = createPaceProjects;
exports.updatePaceProject = updatePaceProject;
exports.removeProject = removeProject;
function getPaceProjects(PaceProject, req, res) {
    try {
        PaceProject.find({}, function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(doc);
            }
        });
    } catch (err) {
        console.log(err);
    }
}

function createPaceProjects(PaceProject, req, res) {
    try {
        var query = {};
        query.projName = req.body.projName;
        var paceproject = new PaceProject(req.body);
        PaceProject.find(query, function (err, doc) {
            if (err) {
                console.log("kuch fata h");
            } else {
                if (doc.length > 0) {
                    res.status(417).send("Project Name Already Exist !!");
                } else {
                    paceproject.save(function (err, doc) {
                        if (err) {
                            res.status(417).send(err);
                        } else {
                            res.status(201).send(doc);
                        }
                    });
                }
            }
        });
    } catch (err) {}
}

function updatePaceProject(PaceProject, req, res) {
    try {
        if (req.params.id !== undefined) {
            PaceProject.findById(req.params.id, '-__v', function (err, wo) {
                if (err) {
                    if (err.name === 'CastError' && err.path === '_id') {
                        res.status(404);
                    } else {
                        res.status(417).send(err);
                    }
                } else {
                    if (wo === null) {
                        res.status(404);
                    } else {
                        var patches = [];
                        patches.push({ 'op': 'add', 'path': '/modifiedOn', 'value': new Date() });
                        patches.push({ 'op': 'replace', 'path': '/projName', 'value': req.body.projName });
                        wo.patch(patches, function (err, doc) {
                            if (err) {
                                res.status(417).send(err);
                            } else {
                                res.status(200).send(wo);
                            }
                        });
                    }
                }
            });
        } else {
            var info = { 'error': 'Please Specify Project to be updated' };
            res.status(403).send(info);
        }
    } catch (err) {
        console.log(err);
    }
}

function removeProject(PaceProject, req, res) {

    try {
        var query = {};
        query._id = req.params.id;
        PaceProject.remove(query, function (err, evType) {
            if (err) {
                res.status(417).send(err);
            } else {
                var info = { 'info': 'Requested Project Removed' };
                res.status(204).send(info);
            }
        });
    } catch (err) {
        console.log(err);
    }
}