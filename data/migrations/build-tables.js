exports.up = async function (knex) {
    await knex.schema
        .createTable('recipes', (table) => {
            table.increments('recipes_id')
            table.string('recipe_name', 128).unique().notNullable()
        })
        .createTable('steps', (table) => {
            table.increments('steps_id')
            table.integer('steps_number').notNullable()
            table.string('steps_instructions', 256).notNullable()
            // Foreign Key relationship
            table.integer('recipes_id')
                .unsigned()
                .notNullable()
                .references('recipes_id')
                .inTable('recipes')
                .onDelete('CASCADE') // normally restricted
                .onUpdate('CASCADE')
        })
        .createTable('ingredients', (table) => {
            table.increments('ingredients_id')
            table.string('recipe_name', 128).unique().notNullable()
        })
        .createTable('steps_ingredients', (table) => {
            table.increments('id')
            table.integer('steps_id')
                .unsigned()
                .notNullable()
                .references('steps_id')
                .inTable('steps')
                .onDelete('CASCADE') // normally restricted
                .onUpdate('CASCADE')
            table.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('ingredients_id')
                .inTable('ingredients')
                .onDelete('CASCADE') // normally restricted
                .onUpdate('CASCADE')
            table.string('quantity', 128).notNullable()
        })
}

exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('steps_ingredients')
  };