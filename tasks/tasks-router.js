// IMPORTS/INITIALIZATION =========================|
// ================================================|
const router = require('express').Router()
const Tasks = require('./tasks-model.js')
// ------------------------------------------------|
// ROUTE HANDLERS =================================|
// ================================================|
// base url - '/api/tasks' ------------------------|
// ------------------------------------------------|
// GET Request returns a list of all tasks --------|
router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.getAll()

    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to retrieve tasks'
    })
  }
})
// ------------------------------------------------|
// POST Request adds a task to the db -------------|
router.post('/', async (req, res) => {
  const newTask = req.body

  try {
    const created = await Tasks.add(newTask)

    res.json(created)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to add task'
    })
  }
})
// ------------------------------------------------|
// DELETE Request removes a task from the db ------|
router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const toBeRemoved = await Tasks.remove(id)

    res.json(toBeRemoved)
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Failed to remove task'
    })
  }
})
// ------------------------------------------------|
// EXPORT ROUTER ==================================|
// ================================================|
module.exports = router
