import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import categoryController from '../../controllers/categoryController'
import CategoryValidator from '../../middleware/validators/CategoryValidator'
import Middleware from '../../middleware'

const router = Router()
router.get('/list', 
Middleware.handleValidatorError,
tryCatch(categoryController.fetchAllCategory))
router.post(
  '/add',
  CategoryValidator.checkAddCategory(),
  Middleware.handleValidatorError,
  tryCatch(categoryController.addNewCategory)
)
router.delete(
  '/delete/:categoryId',
  Middleware.handleValidatorError,
  tryCatch(categoryController.deleteCategory)
)

router.put(
  '/update/:categoryId',
  CategoryValidator.checkAddCategory(),
  Middleware.handleValidatorError,
  tryCatch(categoryController.updateCategory)
);

export default router
