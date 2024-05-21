'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shippings', {
      shipping_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      order_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Orders',
          key: 'order_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      username: {
        allowNull: true,
        type: Sequelize.STRING
      },
      shipping_address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      shipping_status: {
        allowNull: true,
        type: Sequelize.STRING
      },
      shipping_note: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      shipping_cost: {
        allowNull: true,
        type: Sequelize.STRING
      },
      estimated_delivery_date: {
        allowNull: true,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Shippings')
  }
}
