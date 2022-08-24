import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateBody from '../middlewares/user.middleware';

const router = Router();

const userController = new UserController();

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', validateBody, userController.create);
router.put('/users/:id', validateBody, userController.update);
router.delete('/users/:id', userController.delete);

export default router;