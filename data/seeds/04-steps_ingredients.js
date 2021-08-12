const steps_ingredients = [

]

exports.steps_ingredients = steps_ingredients

exports.seed = function (knex) {
    return knex('steps_ingredients').insert(steps_ingredients)
}