import joi from "joi"

export const AuthUserSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(2).required()
})