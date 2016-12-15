exports.up = function(knex, Promise) {
    return knex.schema.createTable('car', table => {
        table.increments();
        table.text('make').notNullable();
        table.text('model').notNullable();
        table.integer('year');
        table.integer('user_id').references('user.id').unsigned().onDelete('cascade');

    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('car');

};
