import { Request, Response } from "express";
import { OrderSchema } from "./order.validation";
import { success } from "zod";
import { Product } from "../products/model/product.model";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const parsedBody = OrderSchema.safeParse(req.body);
    if (typeof parsedBody.error !== "undefined") {
      const errorsList = parsedBody.error.issues.map((err) => err.message);
      return res.status(400).json({
        message: "Invalid request data",
        success: false,
        errors: errorsList
      })
    }

    if (parsedBody.success) {
      const product = await Product.findById(parsedBody.data.productId);
      if (product && product.inventory.quantity < parsedBody.data.quantity) {
        return res.status(400).json({
          success: false,
          message: "Insufficient product quantity in inventory"
        })
      }
      if (product) {
        product.inventory.quantity -= parsedBody.data.quantity;
        product.inventory.inStock = product.inventory.quantity === 0 ? false : true;
        const order = await OrderService.createOrder(parsedBody.data);
        await product.save();
        return res.status(201).json({
          success: true,
          message: "Order was successfully created",
          data: order
        })
      }
    }
  } catch (err: any) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err
    })
  }
}

export const OrderController = {
  createOrder
}