import Joi from 'joi';

export const CreateUserSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    createdAt: Joi.date().default(Date.now())
});