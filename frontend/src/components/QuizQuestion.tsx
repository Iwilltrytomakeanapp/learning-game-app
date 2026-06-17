import React, { useState } from 'react';
import { CheckCircle, XCircle, Zap } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: string;
  onAnswer: (isCorrect: boolean, pointsEarned: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  options,
  correctAnswer,
  category,
  difficulty,
  onAnswer,
  questionNumber,
  totalQuestions
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState<string>('');

  const difficultyMultiplier: { [key: string]: number } = {
    beginner: 10,
    intermediate: 25,
    advanced: 50,
    expert: 100
  };

  const handleAnswer = (index: number) => {
    if (answered) return;

    setSelectedAnswer(index);
    const isCorrect = index === correctAnswer;
    const points = isCorrect ? difficultyMultiplier[difficulty] || 10 : 0;

    setFeedback(isCorrect ? '🎉 Correct!' : '💡 Not quite right, keep learning!');
    setAnswered(true);

    setTimeout(() => {
      onAnswer(isCorrect, points);
    }, 1500);
  };

  const getButtonStyle = (index: number) => {
    if (!answered) {
      return 'bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50';
    }

    if (index === correctAnswer) {
      return 'bg-green-100 border-2 border-green-500';
    }

    if (index === selectedAnswer && index !== correctAnswer) {
      return 'bg-red-100 border-2 border-red-500';
    }

    return 'bg-gray-100 border-2 border-gray-300 opacity-50';
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg">
      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-semibold text-gray-700">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="w-48 bg-gray-300 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Category Badge */}
      <div className="flex gap-2 mb-4">
        <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">
          {category}
        </span>
        <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-semibold">
          {difficulty}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8">{question}</h2>

      {/* Answer Options */}
      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={answered}
            className={`w-full p-4 text-left rounded-lg transition-all transform hover:scale-102 cursor-pointer text-lg font-semibold ${
              getButtonStyle(index)
            } ${answered ? '' : 'hover:shadow-md'}`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {answered && index === correctAnswer && (
                <CheckCircle size={24} className="text-green-600" />
              )}
              {answered && index === selectedAnswer && index !== correctAnswer && (
                <XCircle size={24} className="text-red-600" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Feedback */}
      {answered && (
        <div className={`p-4 rounded-lg flex items-center gap-2 ${
          selectedAnswer === correctAnswer
            ? 'bg-green-100 text-green-800'
            : 'bg-orange-100 text-orange-800'
        }`}>
          <Zap size={20} />
          <span className="font-semibold">{feedback}</span>
        </div>
      )}
    </div>
  );
};