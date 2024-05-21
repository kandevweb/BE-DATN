'use strict'
/** @type {import('sequelize-cli').Migration} */

const UserMigration = require('./create-table-user')
const OrderMigration = require('./create-table-order')
const ProductMigration = require('./create-table-product')
const OrderDetailMigration = require('./create-table-orderDetail')
const StoryMigration = require('./create-table_story')
const CategoryMigration = require('./create-table-category')
const NotificationMigration = require('./create-table-notification')
const ShippingMigration = require('./create-table-shipping')

module.exports = {
  async up(queryInterface, Sequelize) {
    // User
    await UserMigration.up(queryInterface, Sequelize)
    // Order
    await OrderMigration.up(queryInterface, Sequelize)
    // Category
    await CategoryMigration.up(queryInterface, Sequelize)
    // Product
    await ProductMigration.up(queryInterface, Sequelize)
    // Order Detail
    await OrderDetailMigration.up(queryInterface, Sequelize)
    // Story
    await StoryMigration.up(queryInterface, Sequelize)

    // Notification
    await NotificationMigration.up(queryInterface, Sequelize)
    //Shipping
    await ShippingMigration.up(queryInterface, Sequelize)
  },

  async down(queryInterface, Sequelize) {
    // User
    await UserMigration.down(queryInterface, Sequelize)
    // Order
    await OrderMigration.down(queryInterface, Sequelize)
    // Category
    await CategoryMigration.down(queryInterface, Sequelize)
    // Product
    await ProductMigration.down(queryInterface, Sequelize)
    // Order Detail
    await OrderDetailMigration.down(queryInterface, Sequelize)
    // Story
    await StoryMigration.down(queryInterface, Sequelize)
    // Notification
    await NotificationMigration.down(queryInterface, Sequelize)
    //Shipping
    await ShippingMigration.down(queryInterface, Sequelize)
  }
}
