exports.up = function(knex) {
  return knex.schema.createTable('tasks', tasks => {
    tasks.increments()

    tasks.string('task', 128).notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks')
}
