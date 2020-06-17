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
      // define new task
      const newTask = { task: 'this is a new task' }

      // add task to db with helper method
      await Tasks.add(newTask)

      // check db for the added task
      const addedTask = await db('tasks')
        .where({ task: 'this is a new task' })
        .first()

      // assertions
      expect(typeof addedTask).toBe('object')
      expect(addedTask).toEqual({ id: 1, task: 'this is a new task' })
    })
  })
  // remove() method ---------------------------|
  describe('the remove method', () => {
    it('should remove a task from the db', async () => {
      // add a task
      const task = { task: 'this task is to be removed' }
      await db('tasks').insert(task)

      // check task was added
      const taskList = await db('tasks')
      const id = taskList[0].id
      // assertion
      expect(taskList.length).toBe(1)

      // remove task with db helper method
      await Tasks.remove(id)

      // check task was removed
      const newTaskList = await db('tasks')
      // assertion
      expect(newTaskList.length).toBe(0)
    })
  })
})
