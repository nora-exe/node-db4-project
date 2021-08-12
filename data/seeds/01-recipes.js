// Write seed files to populate the tables with test data. Hint: Keep your recipes simple or this step could become extremely time consuming.

const recipes = [
    { recipe_name: 'Cheesy Chicken Quesadillas' },
    { recipe_name: 'Red Chili Chicken Enchiladas' },
    { recipe_name: 'Salsa Verde Enchiladas' },
    { recipe_name: 'One-Pan BBQ Pulled Chicken Tacos' }
]

exports.recipes = recipes

exports.seed = function (knex) {
    return knex('recipes').insert(recipes)
}