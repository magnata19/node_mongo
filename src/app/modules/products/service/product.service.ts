import { TProduct } from "../contracts/product.interface";
import { Product } from "../model/product.model";

const createProduct = async (data: TProduct) => {
  const result = await Product.create(data)
  return result;
}

export const ProductService = {
  createProduct
}