'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      category_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Categories',
          key: 'category_id'
        }
      },
      image:{
        allowNull: false,
        type: Sequelize.STRING
      },
      product_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      quantity:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Sử dụng Sequelize.literal
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Sử dụng Sequelize.literal
      }
      
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products')
  }
}
