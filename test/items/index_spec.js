/* global api, describe, it, expect, beforeEach */

const Item = require('../../models/item')

const { itemData } = require('../mock_data')

describe('GET /', () => {
  beforeEach(done => {
    Promise.all([
      Item.remove({})
    ])
      .then(() => Item.create(itemData))
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api
      .get('/api/')
      .expect(200, done)
  })

  it('should return an array of items', done => {
    api
      .get('/api/')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        res.body.forEach(item => {
          expect(item).to.include.keys([
            '_id',
            'name',
            'image',
            'description',
            'categories'
          ])
        })
        done()
      })
  })
})
