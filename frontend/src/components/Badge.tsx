import React from 'react';
import { Trophy, Star, Zap, Target } from 'lucide-react';

interface BadgeProps {
  type: 'achievement' | 'streak' | 'mastery' | 'challenge';
  title: string;
  description: string;
  earned: boolean;
}

const badgeIcons = {
  achievement: Trophy,
  streak: Zap,
  mastery: Star,
  challenge: Target
};

const badgeColors = {
  achievement: 'from-yellow-400 to-yellow-600',
  streak: 'from-orange-400 to-orange-600',
  mastery: 'from-purple-400 to-purple-600',
  challenge: 'from-pink-400 to-pink-600'
};

export const Badge: React.FC<BadgeProps> = ({
  type,
  title,
  description,
  earned
}) => {
  const Icon = badgeIcons[type];
  const colorClass = badgeColors[type];

  return (
    <div className={`relative p-4 rounded-lg text-center transition-all ${
      earned
        ? `bg-gradient-to-br ${colorClass} text-white shadow-lg`
        : 'bg-gray-200 text-gray-500 opacity-50'
    }`}>
      <div className="flex justify-center mb-2">
        <Icon size={32} />
      </div>
      <h3 className="font-bold text-sm mb-1">{title}</h3>
      <p className="text-xs opacity-90">{description}</p>
      {earned && (
        <div className="mt-2 text-xs font-semibold">✨ Earned!</div>
      )}
    </div>
  );
};