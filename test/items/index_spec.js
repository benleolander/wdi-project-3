/* global api, describe, it, expect, beforeEach */

const Item = require('../../models/item')
const Creator = require('../../models/creator')

const { itemData, creatorData } = require('../mock_data')

describe('GET /items', () => {
  beforeEach(done => {
    Promise.all([
      Item.deleteMany({}),
      Creator.deleteMany({})
    ])
      .then(() => Creator.create(creatorData))
      .then(creator => itemData.map(item => ({ ...item, creator })))
      .then(itemData => Item.create(itemData))
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api
      .get('/api/items')
      .expect(200, done())
  })

  it('should return an array of items', done => {
    api
      .get('/api/items')
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
