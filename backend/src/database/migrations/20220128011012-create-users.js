'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        user: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING(100),
          unique: true,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING(32),
        },
        role: {
          allowNull: true,
          type: Sequelize.STRING(20),
          defaultValue: 'customer',
        },
      },
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  }
};
