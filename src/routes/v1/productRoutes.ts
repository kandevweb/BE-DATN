import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import productController from '../../controllers/productController'
import ProductValidator from '../../middleware/validators/ProductValidator'
import Middleware from '../../middleware'

const router = Router()
router.get('/list', tryCatch(productController.fetchAllProduct))
router.post(
  '/add',
  ProductValidator.checkAddProduct(),
  Middleware.handleValidatorError,
  tryCatch(productController.addNewProduct)
)
router.delete(
  '/delete/:productId',
  Middleware.handleValidatorError,
  tryCatch(productController.deleteProduct)
)

router.put(
  '/update/:productId',
  ProductValidator.checkAddProduct(),
  Middleware.handleValidatorError,
  tryCatch(productController.updateProduct)
);
router.get(
  '/detail/:productId',
  Middleware.handleValidatorError,

  tryCatch(productController.productDetail)
)

export default router
