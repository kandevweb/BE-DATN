'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      category_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      category_name: {
        allowNull: true,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Categories')
  }
}
