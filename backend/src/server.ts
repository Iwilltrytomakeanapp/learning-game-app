import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/learnquest';
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'Server is running! 🎮' });
});

app.get('/api/subjects', (req: Request, res: Response) => {
  res.json([
    {
      id: 'math',
      name: 'Math',
      description: 'Learn arithmetic, algebra, geometry, and more!',
      icon: '🔢'
    },
    {
      id: 'science',
      name: 'Science',
      description: 'Explore biology, physics, chemistry, and earth science!',
      icon: '🔬'
    },
    {
      id: 'social-science',
      name: 'Social Science',
      description: 'Discover history, geography, civics, and economics!',
      icon: '🌍'
    }
  ]);
});

app.get('/api/difficulties', (req: Request, res: Response) => {
  res.json([
    { id: 'beginner', name: 'Beginner', ageRange: '6-8', pointsMultiplier: 10 },
    { id: 'intermediate', name: 'Intermediate', ageRange: '9-11', pointsMultiplier: 25 },
    { id: 'advanced', name: 'Advanced', ageRange: '12-14', pointsMultiplier: 50 },
    { id: 'expert', name: 'Expert', ageRange: '15+', pointsMultiplier: 100 }
  ]);
});

// Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();

export default app;