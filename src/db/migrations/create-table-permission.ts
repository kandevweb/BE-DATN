import { QueryInterface, Sequelize, DataTypes } from 'sequelize'

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('Permissions', {
      permission_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING
      },
      display_name: {
        allowNull: true,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Permissions')
  }
}
