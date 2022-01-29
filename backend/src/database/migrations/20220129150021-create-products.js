'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'products',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(100),
          unique: true,
        },
        price: {
          allowNull: false,
          type: Sequelize.DECIMAL(10,2),
        },
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  }
};
