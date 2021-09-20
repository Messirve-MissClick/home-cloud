const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index.js').app;

chai.use(chaiHttp);

describe('Testing app routes', () => {
    it('should Retrun Hello World', (done) => {
        chai.request(app)
        .get('/')
        .end((req, res) => {
            chai.assert.equal(res.text, 'Hello world');
            done();
        });
    });
});


