'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        user:'sistematxai',
        email: 'adm@deliveryapp.com',
        password: '123456789',
        role: 'administrator',
      },
      {
        user: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '12345678',
        role: 'customer'
      },
      {
        user: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '123456',
        role: 'customer'
      },
    ],
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
