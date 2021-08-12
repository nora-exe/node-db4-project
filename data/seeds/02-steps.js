const steps = [

]

exports.steps = steps

exports.seed = function (knex) {
    return knex('steps').insert(steps)
}