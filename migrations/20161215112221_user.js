exports.up = function(knex, Promise) {

    return knex.schema.createTable('user', table => {
        table.increments();
        table.text('email').unique().notNullable();
        table.text('password').notNullable();
        table.boolean('is_active').defaultTo(true);


    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user')

};
