// IMPORTS/INITIALIZATION =========================|
// ================================================|
const request = require('supertest')
const server = require('../api/server')
const db = require('../data/dbConfig.js')
// ------------------------------------------------|
// TESTING ========================================|
// ================================================|
describe('the tasks router', () => {
  // reset before running tests
  beforeEach(async () => {
    await db('tasks').truncate()
  })
  describe('GET /api/tasks/', () => {
    it('should return status 200', () => {
      return request(server)
        .get('/api/tasks/')
        .then(res => {
          expect(res.status).toBe(200)
          expect(res.type).toBe('application/json')
        })
    })
    it('should return a list of tasks', () => {
      return request(server)
        .get('/api/tasks/')
        .then(res => {
          expect(res.body).toEqual([])
        })
    })
  })
  describe('POST /api/tasks/', () => {
    it('responds with json', () => {
      return request(server)
        .post('/api/tasks/')
        .send({ task: 'take out trash' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    })
  })
  describe('DELETE /api/tasks/:id', () => {
    it('should return status 200', () => {
      return request(server)
        .post('/api/tasks')
        .send({ task: 'to be deleted' })
        .then(() => {
          request(server)
            .del('/api/tasks/1')
            .expect(200)
        })
    })
  })
})
