import { z } from "zod";
import { TProduct } from "../contracts/product.interface";

export const variantsValidationSchema = z.object({
  type: z.string(),
  value: z.string()
})

export const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean()
})

const ProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantsValidationSchema),
  inventory: inventoryValidationSchema
})

export default ProductValidationSchema;