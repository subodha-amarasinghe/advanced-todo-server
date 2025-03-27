import { Request, Response } from 'express';
import Task from '../models/task.model';

class TaskController {
  static async createTask(req: Request, res: Response) {
    try {
      const task = new Task({
        ...req.body,
        // user: req.user?._id // Assuming you have authentication middleware
      });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      // Ensure error is properly typed
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ error: errorMessage });
    }
  }

  static async getTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(500).json({ error: errorMessage });
    }
  }
}

export default TaskController;