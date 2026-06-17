import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatar: string;
  level: number;
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  badges: string[];
  currentDifficulty: string;
  subjectProgress: {
    subject: string;
    level: number;
    accuracy: number;
    questionsAnswered: number;
  }[];
  createdAt: Date;
  lastActiveAt: Date;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '😊' },
  level: { type: Number, default: 1 },
  totalXP: { type: Number, default: 0 },
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  badges: [{ type: String }],
  currentDifficulty: { type: String, default: 'beginner', enum: ['beginner', 'intermediate', 'advanced', 'expert'] },
  subjectProgress: [
    {
      subject: String,
      level: Number,
      accuracy: Number,
      questionsAnswered: Number
    }
  ],
  createdAt: { type: Date, default: Date.now },
  lastActiveAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', UserSchema);