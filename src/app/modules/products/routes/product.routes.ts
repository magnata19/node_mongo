import express from 'express'
import { Router } from 'express'
import { ProductController } from '../controller/product.controller';

const router = Router()

router.post('/create', ProductController.createProduct)

export const ProductRouter = router;