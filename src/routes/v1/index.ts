import { Router } from 'express'
import { API_V1 } from '../../constants/apiPaths'
import commonRoutes from './commonRoutes'
import userRoutes from './userRoutes'
import interestRoutes from './interestRoutes'
import categoryRoutes from './categoryRoutes'
import productRoutes from './productRoutes'
import storyRoutes from './storyRoutes'
const router = Router()

router.use(API_V1.common, commonRoutes)
router.use(API_V1.user, userRoutes)
router.use(API_V1.interest, interestRoutes)
router.use(API_V1.category, categoryRoutes)
router.use(API_V1.product, productRoutes)
router.use(API_V1.story, storyRoutes)

export default router
