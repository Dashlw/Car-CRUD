exports.seed = function(knex, Promise) {
    return knex.raw('DELETE FROM car; ALTER SEQUENCE car_id_seq RESTART WITH 1')
        .then(() => {
            const cars = [{
                make: 'Ford',
                model: 'Mustang',
                year: 1977,
                user_id: 1
            }, {
                make: 'Totyota',
                model: 'Prius',
                year: 2012,
                user_id: 2
            }, {
                make: 'Porsche',
                model: 'Cayman',
                year: 2016,
                user_id: 1
            }, {
                make: 'Chevy',
                model: 'Camero',
                year: 1968,
                user_id: 2
            }, ];
            return knex('car').insert(cars);
        });
};
