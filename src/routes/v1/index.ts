import { Router } from 'express'
import commonRoutes from './commonRoutes'
import userRoutes from './userRoutes'
import categoryRoutes from './categoryRoutes'
import productRoutes from './productRoutes'
import { API_V1 } from '../../constants/apiPaths'


const router = Router()
router.use(API_V1.common, commonRoutes)
router.use(API_V1.user, userRoutes)
router.use(API_V1.category, categoryRoutes)
router.use(API_V1.product, productRoutes)

export default router
