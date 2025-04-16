import { Router } from "express";
import postController from "../controllers/postController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { createPostSchema } from "../schemas/validation/CreatePost.js";

const postRouter = Router();

postRouter.use(authMiddleware);

postRouter.post("/post",validationSchemaMiddleware(createPostSchema) ,postController.create);

postRouter.get("/post" , postController.findAll);

postRouter.get("/post/:id" , postController.findPostById);

export default postRouter;