import { Router } from 'express'
import { ProductController } from '../controller/product.controller';

const router = Router()

router.post('/create', ProductController.createProduct)
router.post('/create-many', ProductController.createManyProducts)

export const ProductRouter = router;