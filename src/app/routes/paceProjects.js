
export function getPaceProjects(PaceProject, req, res) {
    try {
        PaceProject.find({}, function (err, doc) {
            if (err) {
                console.log(err)

            } else {
                res.status(200).send(doc)
            }
        
        })

    } catch (err) {
        console.log(err)
    }
}

export function createPaceProjects(PaceProject, req, res) {
    try {
        var query = {}
        query.projName = req.body.projName
        let paceproject = new PaceProject(req.body)
        PaceProject.find(query , function (err , doc) {
        if (err) {
            console.log("kuch fata h")

        } else {
            if (doc.length > 0){
                res.status(417).send("Project Name Already Exist !!")
            }
            else {
                paceproject.save(function (err, doc){
                    if (err) {
                        res.status(417).send(err)
                    }
                    else {
                        res.status(201).send(doc)
                    }
                    })
            }
        }
        })
        

    } catch (err) {

    }
}