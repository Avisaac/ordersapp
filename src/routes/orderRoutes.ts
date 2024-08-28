import express from 'express';
import { createNewOrder, getUserOrders } from '../controllers/orderController';
import { validate } from '../middleware/validate';
import { createOrderSchema } from '../validators/orderValidator';

const router = express.Router();

router.post('/', validate(createOrderSchema), createNewOrder);
router.get('/user/:user', getUserOrders);

export default router;