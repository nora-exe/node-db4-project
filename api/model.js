const db = require('../data/db-config.js');

// TODO : fix duplication in GET req

async function getRecipeByID(recipes_id) {
    const rows = await db('recipes as r')
        .leftJoin('steps as st', 'r.recipes_id', 'st.recipes_id')
        .leftJoin('steps_ingredients as stIng', 'stIng.steps_id', 'st.steps_id')
        .leftJoin('ingredients as i', 'i.ingredients_id', 'stIng.ingredients_id')
        .where('r.recipes_id', recipes_id)
        .select('st.*', 'stIng.quantity', 'i.ingredients_name', 'r.recipe_name', 'r.recipes_id')
        .orderBy('steps_number')
    const result = {
        'recipe ID': rows[0].recipes_id,
        'recipe name': rows[0].recipe_name,
        steps: []
    }
    rows.forEach(row => {
        if (row.steps_id) {

            result.steps.push({
                'step ID': row.steps_id,
                'step number': row.steps_number,
                instructions: row.steps_instructions,
                ingredients: {
                    name: row.ingredients_name || '',
                    quantity: row.quantity || ''
                }
            })
        }
    })
    return result
}

module.exports = {
    getRecipeByID
}