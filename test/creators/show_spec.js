/* global api, describe, it, expect, beforeEach */

const { creatorData, itemData } = require('../mock_data.js')

const Item = require('../../models/item')
const Creator = require('../../models/creator')

let creator

describe('GET /creators/:id', () => {
  beforeEach(done => {
    Promise.all([
      Item.deleteMany({}),
      Creator.deleteMany({})
    ])
      .then(()=> Creator.create(creatorData))
      .then(res => creator = res)
      .then(creator => itemData.map(item => ({ ...item, creator })))
      .then(itemData => Item.create(itemData))
      .then(() => done())

  })
  it('should return a 200 response', done => {
    api
      .get(`/api/creators/${creator._id}`)
      .expect(200, done)
  })

  it('should return a creator with items', done => {
    api
      .get(`/api/creators/${creator._id}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
          '_id',
          'username',
          'bio',
          'items'
        ])
        done()
      })
  })
  it('should return the correct creator data with correct items data', done => {

    api
      .get(`/api/creators/${creator._id}`)
      .end((err, res) => {
        expect(res.body.username).to.eq(creatorData.username)
        expect(res.body.bio).to.eq(creatorData.bio)
        console.log('ITEMS', res.body.items)
        expect(res.body.items[0].name).to.eq(itemData[0].name)
        done()
      })
  })

})
