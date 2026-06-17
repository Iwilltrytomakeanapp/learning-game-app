import React from 'react';
import { Beaker, Calculator, Globe } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const subjects: Subject[] = [
  {
    id: 'math',
    name: 'Math',
    icon: <Calculator size={40} />,
    color: 'from-blue-400 to-blue-600',
    description: 'Numbers, equations, and problem-solving!'
  },
  {
    id: 'science',
    name: 'Science',
    icon: <Beaker size={40} />,
    color: 'from-green-400 to-green-600',
    description: 'Discover how the world works!'
  },
  {
    id: 'social-science',
    name: 'Social Science',
    icon: <Globe size={40} />,
    color: 'from-purple-400 to-purple-600',
    description: 'History, geography, and culture!'
  }
];

interface SubjectSelectorProps {
  onSelect: (subject: string) => void;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Pick Your Subject 📚
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelect(subject.id)}
            className={`bg-gradient-to-br ${subject.color} rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
          >
            <div className="flex justify-center mb-4 opacity-90">{subject.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{subject.name}</h3>
            <p className="text-sm opacity-90">{subject.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};