// Write seed files to populate the tables with test data. Hint: Keep your recipes simple or this step could become extremely time consuming.

const recipes = [
    { recipe_name: 'Cheesy Chicken Quesadillas' },
    { recipe_name: 'Red Chili Chicken Enchiladas' },
    { recipe_name: 'Salsa Verde Enchiladas' },
    { recipe_name: 'One-Pan BBQ Pulled Chicken Tacos' },
    { recipe_name: 'Mozzarella & Mushroom Hoagies' },
    { recipe_name: 'Italian Chicken & Pepper Sandos' },
    { recipe_name: 'Coconut Curry Chicken' },
    { recipe_name: 'Thai Ginger Curry' },
]

exports.recipes = recipes

exports.seed = function (knex) {
    return knex('recipes').insert(recipes)
}