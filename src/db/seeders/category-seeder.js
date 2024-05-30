'use strict'
/** @type {import('sequelize-cli').Migration} */
const { hashSync, genSaltSync } = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
            category_id: 'c1234567890',
            category_name: 'Áo', 
            description: 'Danh mục chứa các sản phẩm áo' 
          },
          {
            category_id: 'c0987654321',
            category_name: 'Mũ',
            description: 'Danh mục chứa các sản phẩm mũ' 
          },
          {
            category_id: 'c5678901234',
            category_name: 'Áo khoác', 
            description: 'Danh mục chứa các sản phẩm áo khoác' 
          }
          
          
          
          
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  }
}
