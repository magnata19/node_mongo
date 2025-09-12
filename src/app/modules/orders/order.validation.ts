import z from "zod";
import { TOrder } from "./order.interface";

export const OrderSchema = z.object({
  email: z.string({ error: "Email is required" }),
  productId: z.string(),
  quantity: z.number(),
  price: z.number()
})