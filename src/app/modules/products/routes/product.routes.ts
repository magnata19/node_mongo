import { Router } from 'express'
import { ProductController } from '../controller/product.controller';
import { verifyToken } from '../../../middlewares/authMiddleware';

const router = Router()

router.post('/create', ProductController.createProduct)
router.post('/create-many', ProductController.createManyProducts)
router.get('/all', ProductController.getAllProducts)
router.get('/:id', verifyToken ,ProductController.getProductById)
router.put('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)

export const ProductRouter = router;