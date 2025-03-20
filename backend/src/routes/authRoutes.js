import { Router } from 'express';
import authController from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validationSchemaMiddleware } from '../middlewares/validationSchemaMiddleware.js';
import { CreateUserSchema } from '../schemas/validation/CreateUser.js';
import { AuthUserSchema } from '../schemas/validation/AuthUser.js';

const authRouter = Router();

authRouter.post('/signup',validationSchemaMiddleware(CreateUserSchema),authController.signup);
authRouter.post('/signin',validationSchemaMiddleware(AuthUserSchema),authController.signin);
authRouter.get('/me', authMiddleware, authController.userLogged);

export default authRouter;

