'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          review_id: 'r1234567890',
          rating: 5,
          comment: 'Áo thun rất đẹp và chất lượng.',
          review_date: new Date(),
          user_id: 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002',
          product_id: 'p1234567890'
        },
        {
          review_id: 'r0987654321',
          rating: 4,
          comment: 'Mũ rơm rất tuyệt vời, nhưng giao hàng hơi chậm.',
          review_date: new Date(),
          user_id: 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece',
          product_id: 'p0987654321'
        },
        {
          review_id: 'r5678901234',
          rating: 3,
          comment: 'Áo khoác khá ổn, nhưng giá hơi cao.',
          review_date: new Date(),
          user_id: 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece',
          product_id: 'p5678901234'
        },
        {
          review_id: 'r4321098765',
          rating: 5,
          comment: 'Sản phẩm hoàn hảo, rất hài lòng!',
          review_date: new Date(),
          user_id: 'sanji-22c73-f703-4b16-847d-f61bae05-onepiece',
          product_id: 'p1234567890'
        },
        {
          review_id: 'r6789012345',
          rating: 4,
          comment: 'Mũ rơm chất lượng tốt, nhưng hình ảnh không giống hoàn toàn với hình trên web.',
          review_date: new Date(),
          user_id: 'nami-22c73-f703-4b16-847d-f61bae05-onepiece',
          product_id: 'p0987654321'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
