import { Request, Response } from "express";
import ProductValidationSchema from "../validations/product.validation";
import { ProductService } from "../service/product.service";
import { TProduct } from "../contracts/product.interface";

const createProduct = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const parseData = ProductValidationSchema.parse(req.body)
    const result = await ProductService.createProduct(parseData);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err
    })
  }
}

export const ProductController = {
  createProduct
}