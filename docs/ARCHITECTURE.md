# LearnQuest Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Client (React)                      │
│  Components: DifficultySelector, SubjectSelector, etc  │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/REST
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Backend (Node.js/Express)                  │
│           API Routes & Controllers                      │
└────────────────────┬────────────────────────────────────┘
                     │ Mongoose ODM
                     ▼
┌─────────────────────────────────────────────────────────┐
│           Database (MongoDB)                            │
│     Users, Questions, Quizzes Collections              │
└─────────────────────────────────────────────────────────┘
```

## Difficulty Tiers

- **Beginner (6-8)**: 10 XP per correct answer
- **Intermediate (9-11)**: 25 XP per correct answer
- **Advanced (12-14)**: 50 XP per correct answer
- **Expert (15+)**: 100 XP per correct answer

## Data Models

### User
- username, email, password
- level, totalXP, currentStreak
- badges, subjectProgress

### Question
- subject, difficulty, category
- question, options, correctAnswer
- explanation, hints

### Quiz
- userId, subject, difficulty
- questions, answers, score
- accuracy, pointsEarned
