const assert = require('assert')
const request = require('supertest')
const app = require('../index')

describe('GET "/items"', () => {
    it('respond with array of item', (done) => {
        let want = [
            {id: 1, name:'iphone 12 Pro Max'},
            {id: 2, name:'Samsung Hero'}

        ]
        request(app).get('/items').expect(want, done)
    })

})
