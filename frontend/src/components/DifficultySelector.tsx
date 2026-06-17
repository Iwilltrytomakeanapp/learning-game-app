import React from 'react';
import { Trophy, Zap, BookOpen, Brain } from 'lucide-react';

interface DifficultyLevel {
  id: string;
  name: string;
  description: string;
  ageRange: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const difficultyLevels: DifficultyLevel[] = [
  {
    id: 'beginner',
    name: '🌟 Beginner',
    description: 'Just starting out? Perfect for learning basics!',
    ageRange: 'Ages 6-8',
    icon: <BookOpen size={32} />,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 'intermediate',
    name: '⚡ Intermediate',
    description: 'Ready for more? Level up your skills!',
    ageRange: 'Ages 9-11',
    icon: <Zap size={32} />,
    color: 'text-orange-500',
    bgColor: 'bg-orange-100'
  },
  {
    id: 'advanced',
    name: '🎯 Advanced',
    description: 'Challenge yourself with complex problems!',
    ageRange: 'Ages 12-14',
    icon: <Brain size={32} />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100'
  },
  {
    id: 'expert',
    name: '👑 Expert',
    description: 'Master the knowledge and compete globally!',
    ageRange: 'Ages 15+',
    icon: <Trophy size={32} />,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100'
  }
];

interface DifficultySelectorProps {
  onSelect: (difficulty: string) => void;
  currentDifficulty?: string;
}

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  onSelect,
  currentDifficulty
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Choose Your Level 🎮
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {difficultyLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => onSelect(level.id)}
            className={`p-6 rounded-lg border-2 transition-all transform hover:scale-105 ${
              currentDifficulty === level.id
                ? `${level.bgColor} border-current`
                : 'border-gray-200 hover:border-gray-400 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={level.color}>{level.icon}</div>
              <span className="text-xs font-semibold text-gray-600 bg-white px-2 py-1 rounded">
                {level.ageRange}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{level.name}</h3>
            <p className="text-sm text-gray-600">{level.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};