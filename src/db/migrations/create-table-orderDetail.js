'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_Details', {
      order_detail_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      unit_price: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      total_price: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      product_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: 'Products',
          key: 'product_id'
        }
      },
      order_id: {
        allowNull: true,
        type: Sequelize.STRING,
        references: {
          model: 'Orders',
          key: 'order_id'
        }
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
    await queryInterface.dropTable('Order_Details')
  }
}
