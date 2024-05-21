'use strict'
/** @type {import('sequelize-cli').Migration} */

const UserSeeder = require('./user-seeder')
const CategorySeeder = require('./category-seeder')
const NotificationSeeder = require('./notification-seeder')
const OrderDetailSeeder = require('./order_detail-seeder')
const OrderSeeder = require('./order-seeder')
const ProductSeeder = require('./product-seeder')
const ShippingSeeder = require('./shipping-seeder')
const StorySeeder = require('./story-seeder')

module.exports = {
  async up(queryInterface, Sequelize) {
    await UserSeeder.up(queryInterface, Sequelize)
    await CategorySeeder.up(queryInterface, Sequelize)
    await NotificationSeeder.up(queryInterface, Sequelize)
    await OrderSeeder.up(queryInterface, Sequelize)
    await OrderDetailSeeder.up(queryInterface, Sequelize)
    await ProductSeeder.up(queryInterface, Sequelize)
    await ShippingSeeder.up(queryInterface, Sequelize)
    await StorySeeder.up(queryInterface, Sequelize)
  },

  async down(queryInterface, Sequelize) {}
}
