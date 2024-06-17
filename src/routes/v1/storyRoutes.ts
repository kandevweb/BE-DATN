import { Router } from 'express'
import { tryCatch } from '../../utils/response'
import storyController from '../../controllers/storyController'
import Middleware from '../../middleware'

const router = Router()
router.get(
    '/list', 
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(storyController.fetchAllStory))
router.post(
  '/add',
  Middleware.handleValidatorError,
  Middleware.verifyToken,
  tryCatch(storyController.addNewStory)
)
router.delete(
  '/delete/:storyId',
  Middleware.handleValidatorError,
  tryCatch(storyController.deleteStory)
)

router.put(
  '/update/:storyId',
  Middleware.handleValidatorError,
  tryCatch(storyController.updateStory)
);

router.get(
  '/detail/:storyId',
  Middleware.handleValidatorError,
  tryCatch(storyController.storyDetail)
)

export default router
