import { TProduct } from "../contracts/product.interface";
import { Product } from "../model/product.model";

const createProduct = async (data: TProduct) => {
  const result = await Product.create(data)
  return result;
}

const createManyProducts = async (data: TProduct[]) => {
  const result = await Product.insertMany(data)
  return result;
}

const getAllProducts = async (search = '') => {
  const query = search ? { name: { $regex: search, $options: 'i' } } : {};
  const result = await Product.find(query);
  return result;
}

const getProductById = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
}

const updateProduct = async (productId: string, data: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(productId, data, { new: true });
  return result;
}

const deleteProduct = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
}

export const ProductService = {
  createProduct,
  createManyProducts,
  updateProduct,
  getAllProducts,
  getProductById,
  deleteProduct
}