/* global api, describe, it, expect, beforeEach */

const Creator = require('../../models/creator')
const { creatorData } = require('../mock_data')
const { secret } = require('../../config/environment')
const jwt = require('jsonwebtoken')

let creatorVar
let token

describe('DELETE /creator/:id', () => {
  beforeEach(done => {
    Creator.deleteMany({})
      .then(() => Creator.create(creatorData))
      .then(creator => {
        token = jwt.sign({ sub: creator._id }, secret, { expiresIn: '6h' })
        creatorVar = creator
        done()
      })
  })

  it('should return 204', done => {
    api
      .delete(`/api/creators/${creatorVar._id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(204, done)
  })

  it('should cause a login with the same details to fail', done => {
    api
      .delete(`/api/creators/${creatorVar._id}`)
      .set('Authorization', `Bearer ${token}`)
      .then(() => {
        api
          .post('/api/login')
          .send(creatorData)
          .end((err, res) => {
            expect(res.status).to.eq(401)
            done()
          })
      })
  })
})
