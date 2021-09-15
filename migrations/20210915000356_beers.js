exports.up = function (knex) {
  return knex.schema.createTable('beers', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('brewery')
    table.string('country')
    table.string('style')
    table.string('abv')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('beers')
}
