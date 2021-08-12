const ingredients = [
    { ingredients_name: 'Scallions' },
    { ingredients_name: 'Fully Cooked Chicken Breasts' },
    { ingredients_name: 'Southwest Spice Blend' },
    { ingredients_name: 'Flour Tortillas' },
    { ingredients_name: 'Pepper Jack Cheese' },
    { ingredients_name: 'Monterey Jack Cheese' },
    { ingredients_name: 'Hot Sauce' },
    { ingredients_name: 'Smoky Red Pepper Crema' },
    { ingredients_name: 'Roma Tomato' },
    { ingredients_name: 'Red Onion' },
    { ingredients_name: 'Red Wine Vinegar' },
    { ingredients_name: 'Poblano Pepper' },
    { ingredients_name: 'Chicken Breast Strips' },
    { ingredients_name: 'Old El Paso Mild Red Enchilada Sauce' },
    { ingredients_name: 'Mexican Cheese Blend' },
    { ingredients_name: 'Sour Cream' },
    { ingredients_name: 'Black Beans' },
    { ingredients_name: 'Green Salsa' },
    { ingredients_name: 'Chili Pepper' },
    { ingredients_name: 'Pulled Chicken in BBQ Sauce' },
    { ingredients_name: 'Cilantro' },
    { ingredients_name: 'Lime' },
    { ingredients_name: 'Mayonnaise' },
    { ingredients_name: 'Shredded Red Cabbage' },
]

exports.ingredients = ingredients

exports.seed = function (knex) {
    return knex('ingredients').insert(ingredients)
}