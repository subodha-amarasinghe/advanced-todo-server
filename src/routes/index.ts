import { Router } from 'express';
import taskRoutes from './task.routes';

const router = Router();

// router.get('/healthcheck', (_, res) => res.sendStatus(200));

router.use('/api/tasks', taskRoutes);

export default router;