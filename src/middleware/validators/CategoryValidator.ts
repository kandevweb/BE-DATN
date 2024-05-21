import { body } from 'express-validator'

class CategoryValidator {
  checkAddCategory() {
    return [
    body('category_name')
    .notEmpty()
    .withMessage('Danh mục không được để trống!')
    .trim(),

    body('description')
    .notEmpty()
    .withMessage('Mô tả không được để trống!')
    .trim(),
  ]
  }
}
export default new CategoryValidator()
