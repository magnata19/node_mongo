import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router();

router.post('/create', OrderController.createOrder);

export default router;