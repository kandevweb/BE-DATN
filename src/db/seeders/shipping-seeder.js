'use strict'
/** @type {import('sequelize-cli').Migration} */
const { hashSync, genSaltSync } = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Shippings',
      [
        {
            shipping_id: 's1234567890',
            order_id: 'o1234567890', 
            username: 'Luffy', 
            shipping_address: 'Đảo Hải Tặc, Grand Line', 
            shipping_status: 'Đang vận chuyển', 
            shipping_note: 'Vui lòng giao hàng vào buổi sáng', 
            shipping_cost: '50', 
            estimated_delivery_date: 21/5/2024 
        },
        {
            shipping_id: 's0987654321',
            order_id: 'o0987654321', 
            username: 'Zoro', 
            shipping_address: 'Đảo Wano', 
            shipping_status: 'Đã giao hàng', 
            shipping_note: '', 
            shipping_cost: '40', 
            estimated_delivery_date: 21/5/2024
          }
          
          
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Shipping', null, {})
  }
}
