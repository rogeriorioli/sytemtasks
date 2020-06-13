
exports.up = (knex ) => 
knex.schema.createTable('tasks', (table) => {
  table.increments()
  table.string('title').notNullable()
  table.text('description').notNullable()
  table.string('deadline').notNullable()
  table.boolean('status').defaultTo(false).notNullable()
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())
  table.string('user_id').notNullable()
  table.foreign('user_id').references('id').inTable('users')


});

exports.down = (knex) => knex.schema.dropTable('tasks');
 