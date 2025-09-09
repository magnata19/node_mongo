import { Request, Response } from "express";
import ProductValidationSchema from "../validations/product.validation";
import { ProductService } from "../service/product.service";
import { TProduct } from "../contracts/product.interface";

const createProduct = async (req: Request, res: Response) => {
  try {
    const parseData = ProductValidationSchema.parse(req.body)
    const result = await ProductService.createProduct(parseData);
    res.status(201).json({
      success: true,
      message: "Product created successfully"
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err
    })
  }
}

const createManyProducts = async (req: Request, res: Response) => {
  try {
    const parseData = ProductValidationSchema.array().parse(req.body)
    const result = await ProductService.createManyProducts(parseData)
    res.status(201).json({
      success: true,
      message: "Products created successfully",
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

const getAllProducts = async (req: Request, res: Response) => {
  const { search } = req.query
  const result = await ProductService.getAllProducts(search as string);
  res.status(200).json({
    success: true,
    message: "Products fetched successfully",
    data: result
  })
}

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ProductService.getProductById(id!);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
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

const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = req.body;
    const result = await ProductService.updateProduct(id!, data)
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
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

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ProductService.deleteProduct(id!);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully"
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err
    });
  }
}
export const ProductController = {
  createProduct,
  createManyProducts,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
}