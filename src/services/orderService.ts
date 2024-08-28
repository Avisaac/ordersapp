import Order, { IOrder } from '../models/Order';
import logger from '../utils/logger';

export const createOrder = async (orderData: IOrder): Promise<IOrder> => {
  try {
    const newOrder = new Order(orderData);
    return await newOrder.save();
  } catch (error) {
    logger.error('Error creating order:', error);
    throw new Error('Failed to create order');
  }
};

export const getOrdersByUser = async (user: string): Promise<IOrder[]> => {
  try {
    return await Order.find({ user });
  } catch (error) {
    logger.error('Error fetching orders:', error);
    throw new Error('Failed to fetch orders');
  }
};