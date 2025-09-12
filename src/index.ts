import { Router } from "express";
import { ProductRouter } from "./app/modules/products/routes/product.routes";
import OrderRouter from './app/modules/orders/order.routes'

const router = Router();

router.use('/api/products', ProductRouter)
router.use('/api/orders', OrderRouter)

export const RootRouter = router;