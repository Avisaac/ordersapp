import Joi from 'joi';

export const createOrderSchema = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string(),
  fullAddress: Joi.string(),
  imageUrls: Joi.array().items(Joi.string().uri()).min(1),
  frameColor: Joi.string(),
  user: Joi.string()
});