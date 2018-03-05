const paceProjects = require('../build/app/models/paceProjectsModel');
const data = require('./sampledata');
let chai = require('chai');
let chaistring=require('chai-string');
let chaiHttp = require('chai-http');
let server = require('../build/app');
let should = chai.should();
var faker = require('faker') 
chai.use(chaiHttp);
chai.use(chaistring);

describe ('Pace-Poject' , () => {
  it('Get all the Pace Projects' , (done) => {
    chai.request(server)
    .get('/api/paceprojects')
    // .set('Country', 'FI')
    // .set('App', 'HODA')
    // .set('Content-Type', 'application/json')
    // .set('token','A88D982A-FC81-4EA9-BEB3-189AA0808B78')
    .end((err, res) => {

        res.should.have.status(200);
        res.body.should.be.a('array')
        done();
    })
  })
  it('Create Pace Project' , (done) => {
    chai.request(server)
    .post('/api/paceprojects')
    .send(data.Pace_Project)
    .end((err, res) => {
        res.should.have.status(201);
        done();
    })
  } )
})