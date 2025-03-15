import { Router } from "express";
import postController from "../controllers/postController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const postRouter = Router();

postRouter.post("/post", authMiddleware ,postController.create);

export default postRouter;