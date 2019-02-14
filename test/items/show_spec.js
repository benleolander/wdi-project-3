/* global api, describe, it, expect, beforeEach */

const { creatorData, itemData } = require('../mock_data.js')

const Item = require('../../models/item')
const Creator = require('../../models/creator')

let item

describe('GET /items', () => {
  beforeEach(done => {
    Promise.all([
      Item.deleteMany({}),
      Creator.deleteMany({})
    ])
      .then(() => Creator.create(creatorData))
      .then(creator => itemData.map(item => ({ ...item, creator })))
      .then(itemData => Item.create(itemData))
      .then(items => item = items[0])
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api
      .get(`/api/items/${item._id}`)
      .expect(200, done)
  })


  it('should return the item', done => {
    api
      .get(`/api/items/${item._id}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
          '_id',
          'name',
          'image',
          'creator',
          'description',
          'categories'
        ])
        done()
      })
  })

  it('should return the correct item data', done => {
    api
      .get(`/api/items/${item._id}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(itemData[0].name)
        expect(res.body.image).to.eq(itemData[0].image)
        expect(res.body.creator).to.eq(itemData[0].creator)
        expect(res.body.description).to.eq(itemData[0].description)
        expect(res.body.categories).to.eq(itemData[0].name)
      })
    done()
  })
})
