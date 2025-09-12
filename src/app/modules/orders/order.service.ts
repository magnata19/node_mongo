import { TOrder } from "./order.interface"
import { OrderModel } from "./order.model"

const createOrder = async (orderData: TOrder) => {
  return await OrderModel.create(orderData)
}

export const OrderService = {
  createOrder
}