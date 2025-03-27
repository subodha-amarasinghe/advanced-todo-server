import { Router } from 'express';
import TaskController from '../controllers/task.controller';
// import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

// router.use(authMiddleware); // Protect all task routes

router.post('/', TaskController.createTask);
router.get('/', TaskController.getTasks);

export default router;