'use strict'
/** @type {import('sequelize-cli').Migration} */
const { hashSync, genSaltSync } = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Order_Details',
      [
        {
            order_detail_id: 'od1234567890',
            quantity: 2, 
            unit_price: 50, 
            total_price: '100', 
            product_name: 'Áo thun Straw Hat', 
            order_id: 'o1234567890' 
          },
          
          {
            order_detail_id: 'od0987654321',
            quantity: 3, 
            unit_price: 40, 
            total_price: '120', 
            product_name: 'Mũ rơm Straw Hat', 
            order_id: 'o0987654321' 
          }
          
          
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Order_Details', null, {})
  }
}
