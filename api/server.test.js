// IMPORTS/INITIALIZATION =========================|
// ================================================|
const request = require('supertest')
const server = require('./server.js')
// ------------------------------------------------|
// TESTING ========================================|
// ================================================|
describe('the server', () => {
  // ENDPOINTS ====================================|
  // ==============================================|
  // root endpoint ('/') --------------------------|
  describe('the root endpoint', () => {
    // ASSERTIONS =================================|
    // --------------------------------------------|
    it('should return status 200', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200)
        })
    })
    // --------------------------------------------|
    it('should return an object', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toBe('application/json')
          expect(res.body).toEqual({ api: 'is running' })
        })
    })
    // --------------------------------------------|
  })
  // ==============================================|
})
// ------------------------------------------------|
