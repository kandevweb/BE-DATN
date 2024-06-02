'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          product_id: 'p1234567890',
          category_id: 'c1234567890',
          image: 'https://example.com/images/straw_hat_shirt.jpg',
          product_name: 'Áo thun Straw Hat',
          quantity: '20',
          price: 50,
          description: 'Áo thun với hình in biểu tượng của nhóm hải tặc Straw Hat Pirates'
        },
        {
          product_id: 'p0987654321',
          category_id: 'c1234567890',
          product_name: 'Mũ rơm Straw Hat',
          image: 'https://example.com/images/straw_hat_shirt.jpg',
          quantity: '30',
          price: 40,
          description: 'Mũ rơm giống như mũ của nhóm hải tặc Straw Hat Pirates'
        },
        {
          product_id: 'p5678901234',
          category_id: 'c5678901234',
          image: 'https://example.com/images/trafalgar_law_coat.jpg',
          product_name: 'Áo khoác Trafalgar Law',
          quantity: '14',
          price: 100,
          description: 'Áo khoác phong cách của Trafalgar Law, một trong những đối thủ của nhóm hải tặc Straw Hat Pirates'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
