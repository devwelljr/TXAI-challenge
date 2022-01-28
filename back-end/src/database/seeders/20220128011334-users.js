'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      {
        id: 1,
        user:'sistematxai',
        email: 'adm@deliveryapp.com',
        password: '123456789',
        role: 'administrator',
      },
      {
        id: 2,
        user: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '12345678',
        role: 'customer'
      },
      {
        id: 3,
        user: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '123456',
        role: 'customer'
      },
    ],
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
