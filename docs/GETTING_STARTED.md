# Getting Started with LearnQuest

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Iwilltrytomakeanapp/learning-game-app.git
cd learning-game-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration.

### 4. Set Up MongoDB

Make sure MongoDB is running locally or update your MONGODB_URI.

### 5. Start Development Servers

```bash
npm run dev
```

This will start both frontend and backend simultaneously.

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Key Components

### DifficultySelector
Allows users to choose their learning level with 4 tiers.

### SubjectSelector
Let's users choose between Math, Science, or Social Science.

### QuizQuestion
Displays questions with multiple choice options and instant feedback.

### Dashboard
Shows user statistics, XP, streaks, and badges.

## Next Steps

1. Set up authentication (JWT)
2. Create user profile pages
3. Build leaderboard system
4. Add more content
5. Implement achievement system
6. Add multiplayer challenges
