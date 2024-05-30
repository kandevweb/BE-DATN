import { body } from 'express-validator'

class ProductValidator {
  checkAddProduct() {
    return [
    body('product_name')
    .notEmpty()
    .withMessage('Tên Sản phẩm không được để trống!')
    .trim(),

    body('description')
    .notEmpty()
    .withMessage('Mô tả không được để trống!')
    .trim(),

    body('price')
    .notEmpty()
    .withMessage('Giá cả không được để trống!')
    .isNumeric()
    .withMessage('Giá cả phải là một số!')
    .custom(value => {
        if (value < 0) {
          throw new Error('Giá cả không được là số âm!');
        }
        return true;
      }),

    body('quantity')
    .notEmpty()
    .withMessage('Số lượng không được để trống!')
    .isNumeric()
    .withMessage('Số lượng phải là một số!')
    .custom(value => {
        if (value < 0) {
          throw new Error('Số lượng không được là số âm!');
        }
        return true;
      }),
    
   
  ]

  }
}
export default new ProductValidator()
