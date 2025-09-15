import { TOrder } from "./order.interface"
import { OrderModel } from "./order.model"

const createOrder = async (orderData: TOrder) => {
  return await OrderModel.create(orderData)
}

const handleOrderByEmail = async (query: string | undefined) => {
  const filter = query ? {email: query} : {}
  return await OrderModel.find(filter)
}

export const OrderService = {
  createOrder,
  handleOrderByEmail
}
