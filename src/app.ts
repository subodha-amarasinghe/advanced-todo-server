import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.connectDB();
    this.routes();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private async connectDB(): Promise<void> {
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/express-ts';
    
    try {
      await mongoose.connect(MONGO_URI);
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  }

  private routes(): void {
    this.app.use(router);
    
    // 404 handler
    this.app.use((_req, res) => {
      res.status(404).json({ message: 'Not Found' });
    });

    // Error handler
    this.app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
      console.error(err.stack);
      res.status(500).json({ message: 'Internal Server Error' });
    });
  }
}

export default new App().app;