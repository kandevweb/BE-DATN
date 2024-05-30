'use strict'
/** @type {import('sequelize-cli').Migration} */

const UserMigration = require('./create-table-user')
const ProductMigration = require('./create-table-product')
const StoryMigration = require('./create-table-story')
const OrderMigration = require('./create-table-order')
const OrderDetailMigration = require('./create-table-orderDetail')
const ShippingMigration = require('./create-table-shipping')
const CategoryMigration = require('./create-table-category')
const FriendShipMigration = require('./create-table-friendship')
const NotificationMigration = require('./create-table-notification')
const ProfileMigration = require('./create-table-profile')
const InterestMigration = require('./create-table-interest')
const UserInterestsMigration = require('./create-table-user-interests')
const ReviewMigration = require('./create-table-review')

module.exports = {
  async up(queryInterface, Sequelize) {
    await UserMigration.up(queryInterface, Sequelize)
    await ProfileMigration.up(queryInterface, Sequelize)
    await InterestMigration.up(queryInterface, Sequelize)
    await UserInterestsMigration.up(queryInterface, Sequelize)
    await FriendShipMigration.up(queryInterface, Sequelize)
    await CategoryMigration.up(queryInterface, Sequelize)
    await ProductMigration.up(queryInterface, Sequelize)
    await OrderMigration.up(queryInterface, Sequelize)
    await OrderDetailMigration.up(queryInterface, Sequelize)
    await ReviewMigration.up(queryInterface, Sequelize)
    await StoryMigration.up(queryInterface, Sequelize)
    await NotificationMigration.up(queryInterface, Sequelize)
    await ShippingMigration.up(queryInterface, Sequelize)
  },

  async down(queryInterface, Sequelize) {
    await ShippingMigration.down(queryInterface, Sequelize)
    await NotificationMigration.down(queryInterface, Sequelize)
    await StoryMigration.down(queryInterface, Sequelize)
    await OrderDetailMigration.down(queryInterface, Sequelize)
    await ReviewMigration.down(queryInterface, Sequelize)
    await OrderMigration.down(queryInterface, Sequelize)
    await ProductMigration.down(queryInterface, Sequelize)
    await CategoryMigration.down(queryInterface, Sequelize)
    await FriendShipMigration.down(queryInterface, Sequelize)
    await UserInterestsMigration.down(queryInterface, Sequelize)
    await InterestMigration.down(queryInterface, Sequelize)
    await ProfileMigration.down(queryInterface, Sequelize)
    await UserMigration.down(queryInterface, Sequelize)
  }
}
