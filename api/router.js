const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/recipes/:recipes_id', (req, res, next) => {
    helpers.getRecipeByID(req.params.recipes_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})

module.exports = router;
