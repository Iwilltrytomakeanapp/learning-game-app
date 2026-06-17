import mongoose, { Schema, Document } from 'mongoose';

export interface IQuiz extends Document {
  userId: string;
  subject: string;
  difficulty: string;
  questions: string[];
  answers: (number | null)[];
  score: number;
  accuracy: number;
  timeSpent: number;
  pointsEarned: number;
  completedAt: Date;
}

const QuizSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  difficulty: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  answers: [{ type: Number }],
  score: { type: Number, required: true },
  accuracy: { type: Number, required: true },
  timeSpent: { type: Number, required: true },
  pointsEarned: { type: Number, required: true },
  completedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IQuiz>('Quiz', QuizSchema);