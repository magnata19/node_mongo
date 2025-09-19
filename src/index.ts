import { Router } from "express";
import { ProductRouter } from "./app/modules/products/routes/product.routes";
import OrderRouter from './app/modules/orders/order.routes'
import { UserRouter } from "./app/modules/users/user.router";

const router = Router();

router.use('/api/products', ProductRouter)
router.use('/api/orders', OrderRouter)
router.use('/api/users', UserRouter)

export const RootRouter = router;