/* global api, describe, it, expect, beforeEach */

const Creator = require('../../models/creator')
const { creatorData } = require('../mock_data')

describe('POST /login', () => {
  beforeEach(done => {
    Creator.remove({})
      .then(() => Creator.create(creatorData))
      .then(() => done())
  })

  it('should return a token', done => {
    api
      .post('/api/login')
      .send(creatorData)
      .end((err, res) => {
        expect(res.body.token.split('.').length).to.eq(3)
        done()
      })
  })

  it('should return a 401 response if the password is bad', done => {
    const badData = { email: 'test@test.com', password: 'bad' }

    api
      .post('/api/login')
      .send(badData)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })

  it('should return a 401 response if the user does not exist', done => {
    const badData = { email: 'bad@test.com', password: 'test' }

    api
      .post('/api/login')
      .send(badData)
      .end((err, res) => {
        expect(res.status).to.eq(401)
        done()
      })
  })
})
