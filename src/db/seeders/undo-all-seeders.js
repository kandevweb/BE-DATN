'use strict'
/** @type {import('sequelize-cli').Migration} */
const { hashSync, genSaltSync } = require('bcryptjs')

module.exports = {
  async up(queryInterface, Sequelize) {},
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Order_Details', null, {})
    await queryInterface.bulkDelete('Orders', null, {})
    await queryInterface.bulkDelete('Products', null, {})
    await queryInterface.bulkDelete('Categories', null, {})
    await queryInterface.bulkDelete('Shippings', null, {})
    await queryInterface.bulkDelete('Stories', null, {})
    await queryInterface.bulkDelete('Notifications', null, {})
    await queryInterface.bulkDelete('Users', null, {})
  }
}
