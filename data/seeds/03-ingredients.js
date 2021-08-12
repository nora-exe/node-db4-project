const ingredients = [

]

exports.ingredients = ingredients

exports.seed = function (knex) {
    return knex('ingredients').insert(ingredients)
}