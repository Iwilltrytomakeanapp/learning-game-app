import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestion extends Document {
  subject: string;
  difficulty: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hints: string[];
  imageUrl?: string;
  createdAt: Date;
}

const QuestionSchema: Schema = new Schema({
  subject: { type: String, required: true, enum: ['math', 'science', 'social-science'] },
  difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced', 'expert'] },
  category: { type: String, required: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true },
  explanation: { type: String, required: true },
  hints: [{ type: String }],
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IQuestion>('Question', QuestionSchema);