exports.up = async function (knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            
        })
        .createTable('steps', (table) => {

        })
        .createTable('ingredients', (table) => {

        })
        .createTable('steps_ingredients', (table) => {

        })
}

exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('steps_ingredients')
  };