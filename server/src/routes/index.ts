import { Router } from 'express'
import recipeRoutes from './recipesRoutes'
import statusRoutes from './statusRoutes'

const router = Router()

router.use(recipeRoutes)
router.use(statusRoutes)

export default router
