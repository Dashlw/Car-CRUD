const knex = require('./knex')

module.exports = {
    getOne: function(id) {
        return knex('user').where('id', id).first();
    },
    getCarsByUser: function(id) {
        return knex('car').where('user_id', id);
    }

}
