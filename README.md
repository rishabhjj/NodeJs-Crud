# NodeJs-Crud
Crud Operations with Node and Mongo
Rest API are developed using Node Js and Mongo with CRUD operations.

To Use this Project:
• Start Mongo db server on local on port 27017
• Clone the project and do npm install (to install all the packages)
• Start the node server using npm start

End Points :

GET: /api/paceprojects

DELETE: /api/paceprojects/:id (id denotes the mongo id for the record to be deleted)

POST: /api/paceprojects

Body :
{
"projName" : "Testing" ,
"headCount" : 10
}

Headers:
{
Accept:application/json
}


PATCH: /api/paceprojects/:id

Body :
{
"projName" : "Modified Name" 
}

Headers:
{
Accept:application/json
}

