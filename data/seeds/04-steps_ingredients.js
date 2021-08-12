const steps_ingredients = [
    { steps_id: 1, ingredients_id: 1, quantity: '2 units'  },
    { steps_id: 2, ingredients_id: 2, quantity: '9 oz'  },
    { steps_id: 2, ingredients_id: 3, quantity: '1 tablespoon'  },
    { steps_id: 3, ingredients_id: 4, quantity: '2 units'  },
    { steps_id: 3, ingredients_id: 5, quantity: '1/2 cup'  },
    { steps_id: 3, ingredients_id: 6, quantity: '1/4 cup'  },
    { steps_id: 4, ingredients_id: 7, quantity: '1 teaspoon'  },
    { steps_id: 4, ingredients_id: 8, quantity: '4 tablespoons'  },

    { steps_id: 5, ingredients_id: 9, quantity: '1 unit'  },
    { steps_id: 5, ingredients_id: 10, quantity: '1 unit'  },
    { steps_id: 5, ingredients_id: 12, quantity: '1 unit'  },
    { steps_id: 5, ingredients_id: 13, quantity: '10 ounces'  },
    { steps_id: 6, ingredients_id: 11, quantity: '5 teaspoons'  },
    { steps_id: 7, ingredients_id: 3, quantity: '1 tablespoon'  },
    { steps_id: 7, ingredients_id: 14, quantity: '1 tablespoon'  },
    { steps_id: 8, ingredients_id: 4, quantity: '6 units'  },
    { steps_id: 9, ingredients_id: 14, quantity: '10 ounce can'  },
    { steps_id: 9, ingredients_id: 15, quantity: '1/2 cup'  },
    { steps_id: 10, ingredients_id: 16, quantity: '2 tablespoons'  },

    { steps_id: 11, ingredients_id: 12, quantity: '1 unit'  },
    { steps_id: 11, ingredients_id: 9, quantity: '1 unit'  },
    { steps_id: 11, ingredients_id: 1, quantity: '2 units'  },
    { steps_id: 11, ingredients_id: 17, quantity: '13.5 ounce'  },
    { steps_id: 11, ingredients_id: 19, quantity: '1 unit'  },
    { steps_id: 13, ingredients_id: 3, quantity: '1 tablespoon'  },
    { steps_id: 15, ingredients_id: 4, quantity: '6 units'  },
    { steps_id: 15, ingredients_id: 6, quantity: '1/4 cup'  },
    { steps_id: 16, ingredients_id: 16, quantity: '2 tablespoons'  },

    { steps_id: 17, ingredients_id: 21, quantity: '1/4 ounce'  },
    { steps_id: 17, ingredients_id: 10, quantity: '1 unit'  },
    { steps_id: 17, ingredients_id: 22, quantity: '1 unit'  },
    { steps_id: 18, ingredients_id: 24, quantity: '4 ounce'  },
    { steps_id: 18, ingredients_id: 23, quantity: '2 tablespoon'  },
    { steps_id: 18, ingredients_id: 7, quantity: '1 teaspoon'  },
    { steps_id: 19, ingredients_id: 20, quantity: '10 ounce'  },
    { steps_id: 20, ingredients_id: 4, quantity: '6 units'  },
]

exports.steps_ingredients = steps_ingredients

exports.seed = function (knex) {
    return knex('steps_ingredients').insert(steps_ingredients)
}