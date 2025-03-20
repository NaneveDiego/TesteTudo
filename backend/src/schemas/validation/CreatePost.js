import joi from "joi"

export const createPostSchema = joi.object({
    title: joi.string().min(3).required(),
    content: joi.string().min(3).required(),
    userId: joi.object().required(),
    createdAt: joi.date().default(Date.now())
})