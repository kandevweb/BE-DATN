'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      review_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      comment: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      review_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      user_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          key: 'user_id',
          model: 'Users'
        },
        onDelete: 'CASCADE'
      },
      product_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          key: 'product_id',
          model: 'Products'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};
