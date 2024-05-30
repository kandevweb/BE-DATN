'use strict'
/** @type {import('sequelize-cli').Migration} */

const UserSeeder = require('./user-seeder')
const CategorySeeder = require('./category-seeder')
const NotificationSeeder = require('./notification-seeder')
const ProductSeeder = require('./product-seeder')
const StorySeeder = require('./story-seeder')
const OrderDetailSeeder = require('./order_detail-seeder')
const OrderSeeder = require('./order-seeder')
const ShippingSeeder = require('./shipping-seeder')
const ProfileSeeder = require('./profile-seeder')
const InterestSeeder = require('./interest-seeder')
const UserInterestSeeder = require('./user-interest-seeder')
const ReviewSeeders = require('./review-seeders')

module.exports = {
  async up(queryInterface, Sequelize) {
    await UserSeeder.up(queryInterface, Sequelize);
    await ProfileSeeder.up(queryInterface, Sequelize);
    await InterestSeeder.up(queryInterface, Sequelize);
    await UserInterestSeeder.up(queryInterface, Sequelize);
    await CategorySeeder.up(queryInterface, Sequelize);
    await ProductSeeder.up(queryInterface, Sequelize);
    await OrderSeeder.up(queryInterface, Sequelize);
    await OrderDetailSeeder.up(queryInterface, Sequelize);
    await ShippingSeeder.up(queryInterface, Sequelize);
    await NotificationSeeder.up(queryInterface, Sequelize);
    await ReviewSeeders.up(queryInterface, Sequelize);
    await StorySeeder.up(queryInterface, Sequelize);
  },

  async down(queryInterface, Sequelize) {
    await StorySeeder.down(queryInterface, Sequelize);
    await NotificationSeeder.down(queryInterface, Sequelize);
    await ReviewSeeders.down(queryInterface, Sequelize);
    await ShippingSeeder.down(queryInterface, Sequelize);
    await OrderDetailSeeder.down(queryInterface, Sequelize);
    await OrderSeeder.down(queryInterface, Sequelize);
    await ProductSeeder.down(queryInterface, Sequelize);
    await CategorySeeder.down(queryInterface, Sequelize);
    await UserInterestSeeder.down(queryInterface, Sequelize);
    await InterestSeeder.down(queryInterface, Sequelize);
    await ProfileSeeder.down(queryInterface, Sequelize);
    await UserSeeder.down(queryInterface, Sequelize);
  }
}
