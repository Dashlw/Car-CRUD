exports.seed = function(knex, Promise) {
    return knex.raw('DELETE FROM car; ALTER SEQUENCE car_id_seq RESTART WITH 1')
        .then(() => {
            const cars = [{
                make: 'Ford',
                model: 'Mustang',
                year: 1977,
                image: 'https://mustangattitude.com/mustang/1977/1977_00007_01wb.jpg',
                user_id: 1
            }, {
                make: 'Totyota',
                model: 'Prius',
                year: 2012,
                image: 'https://www.automobilesreview.com/gallery/2012-toyota-prius-family/2012-toyota-prius-family-05.jpg',
                user_id: 2
            }, {
                make: 'Porsche',
                model: 'Cayman',
                year: 2016,
                image: 'https://www.conceptcarz.com/images/Porsche/Porsche-Cayman-Black-Edition-image-001.jpg',
                user_id: 1
            }, {
                make: 'Chevy',
                model: 'Camero',
                year: 1968,
                image: 'https://s-media-cache-ak0.pinimg.com/originals/a5/30/ff/a530ff6be822729f0ee7a5b5182ecad2.jpg',
                user_id: 2
            }, ];
            return knex('car').insert(cars);
        });
};
