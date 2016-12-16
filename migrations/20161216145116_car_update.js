exports.up = function(knex, Promise) {
    return knex.schema.table('car', table => {
        table.text('image');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('car', table => {
        table.dropColummn('image');
    })
};
