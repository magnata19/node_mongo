import { Router } from "express";
import { ProductRouter } from "./app/modules/products/routes/product.routes";

const router = Router();

router.use('/api/products', ProductRouter)

export const RootRouter = router;