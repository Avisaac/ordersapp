import { Request, Response } from 'express';
import { createOrder, getOrdersByUser } from '../services/orderService';
import { IOrder } from '../models/Order';

export const createNewOrder = async (req: Request, res: Response) => {
  try {
    const orderData: IOrder = req.body;
    const newOrder = await createOrder(orderData);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

export const getUserOrders = async (req: Request, res: Response) => {
  try {
    const { user } = req.params;
    const orders = await getOrdersByUser(user);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};