// IMPORTS/INITIALIZATION =========================|
// ================================================|
const Tasks = require('./tasks-model.js')
const db = require('../data/dbConfig.js')
// ------------------------------------------------|
// TESTING ========================================|
// ================================================|
describe('the tasks model', () => {
  // reset before running tests
  beforeEach(async () => {
    await db('tasks').truncate()
  })
  // DB Helper Methods ============================|
  // ==============================================|
  // getAll() method ------------------------------|
  describe('the getAll method', () => {
    it('should return list of tasks', async () => {
      // Test setup
      const taskList = await Tasks.getAll()

      // assertions
      expect(taskList.length).toBe(0)
      expect(taskList).toEqual([])
    })
  })
  // add() method ------------------------------|
  describe('the add method', () => {
    it('should add a task to the db', async () => {
      // test setup
      const newTask = { task: 'this is a new task' }
      await Tasks.add(newTask)
      const addedTask = await db('tasks')
        .where({ task: 'this is a new task' })
        .first()

      expect(typeof addedTask).toBe('object')
      expect(addedTask).toEqual({ id: 1, task: 'this is a new task' })
    })
  })
})
