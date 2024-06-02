'use strict'
/** @type {import('sequelize-cli').Migration} */
const { hashSync, genSaltSync } = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
            order_id: 'o1234567890',
            user_id: 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece',
            order_date: 21/5/2024,
            total_amount: 100, 
            status: 'Đang xử lý' 
          },
          {
            order_id: 'o0987654321',
            user_id: 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece',
            order_date:  21/5/2024,
            total_amount: 150, 
            status: 'Đã giao hàng'
          }
          
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {})
  }
}
