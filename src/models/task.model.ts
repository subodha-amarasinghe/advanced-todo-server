import { Schema, model, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description?: string;
  dueDate?: Date;
  isRecurring: boolean;
  recurrence?: 'daily' | 'weekly' | 'monthly';
  user: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    isRecurring: { type: Boolean, default: false },
    recurrence: { type: String, enum: ['daily', 'weekly', 'monthly'] },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

export default model<ITask>('Task', taskSchema);