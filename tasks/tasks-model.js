// IMPORTS/INITIALIZATION =========================|
// ================================================|
// bring knex operations --------------------------|
const db = require('../data/dbConfig.js')
// ------------------------------------------------|
// DEFINE HELPER METHODS ==========================|
// ================================================|
const add = async task => {
  const [id] = await db('tasks').insert(task)
  return db('tasks').where({ id })
}
// ------------------------------------------------|
const getAll = () => db('tasks').select('id', 'task')
// ------------------------------------------------|
const remove = id =>
  db('tasks')
    .where('id', id)
    .del()
// EXPORT =========================================|
// ================================================|
module.exports = {
  add,
  getAll,
  remove
}
