/* global api, describe, it, expect, beforeEach */

const Creator = require('../../models/creator')
const { creatorData } = require('../mock_data')

describe('POST /register', () => {
  beforeEach(done => {
    Creator.deleteMany({})
      .then(() => done())
  })

  it('should return a success message', done => {
    api
      .post('/api/register')
      .send(creatorData)
      .end((err, res) => {
        expect(res.body.message).to.eq('Registration successful')
        done()
      })
  })

  it('should return a 422 response if the passwords don\'t match', done => {
    const badData = Object.assign({}, creatorData, { password: 'bad' })
    api
      .post('/api/register')
      .send(badData)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })
})
