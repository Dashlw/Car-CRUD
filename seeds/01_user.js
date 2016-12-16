exports.seed = function(knex, Promise) {
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
        .then(() => {
            const users = [{
                id: 1,
                name: 'Andy',
                email: 'fake@email.com',
                password: 'bannana',
            }, {
                id: 2,
                name: 'Dash',
                email: 'another@email.com',
                password: 'apple',
            }];
            return knex('user').insert(users);
        });
};
