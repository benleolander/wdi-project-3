/* global api, describe, it, expect, beforeEach */

const { itemData, creatorData } = require('../mock_data.js')

const Item = require('../../models/item')
const Creator = require('../../models/creator')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

let token

describe('POST /items', () => {
  beforeEach(done => {
    Promise.all([
      Creator.deleteMany({}),
      Item.deleteMany({})
    ])
      .then(() => Creator.create(creatorData))
      .then(creator => {
        token = jwt.sign({ sub: creator._id }, secret, { expiresIn: '6h' })
      })
      .then(done)
  })

  it('should return a 401 response', done => {
    api
      .post('/api/items')
      .send(itemData)
      .expect(401, done)
  })

  it('should return a 201 response with a token', done => {
    api
      .post('/api/items')
      .set('Authorization', `Bearer ${token}`)
      .send(itemData[0])
      .expect(201, done)
  })

  it('should return the created item', done => {
    api
      .post('/api/items')
      .set('Authorization', `Bearer ${token}`)
      .send(itemData[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
          '_id',
          'name',
          'image',
          'description',
          'creator'
        ])
        done()
      })
  })
})
