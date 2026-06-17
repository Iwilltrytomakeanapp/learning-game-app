import React from 'react';
import { TrendingUp, Flame, Gift } from 'lucide-react';

interface UserStats {
  totalXP: number;
  level: number;
  streak: number;
  accuracy: number;
  questionsAnswered: number;
  badges: number;
}

interface DashboardProps {
  stats: UserStats;
  recentActivity: Array<{
    subject: string;
    score: number;
    difficulty: string;
    timestamp: string;
  }>;
}

export const Dashboard: React.FC<DashboardProps> = ({ stats, recentActivity }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* XP Card */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold opacity-90">Total XP</h3>
            <TrendingUp size={20} />
          </div>
          <p className="text-3xl font-bold">{stats.totalXP.toLocaleString()}</p>
          <p className="text-xs opacity-75 mt-2">Level {stats.level}</p>
        </div>

        {/* Streak Card */}
        <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold opacity-90">Current Streak</h3>
            <Flame size={20} />
          </div>
          <p className="text-3xl font-bold">{stats.streak}</p>
          <p className="text-xs opacity-75 mt-2">days in a row</p>
        </div>

        {/* Accuracy Card */}
        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold opacity-90">Accuracy</h3>
            <TrendingUp size={20} />
          </div>
          <p className="text-3xl font-bold">{stats.accuracy}%</p>
          <p className="text-xs opacity-75 mt-2">on {stats.questionsAnswered} questions</p>
        </div>

        {/* Badges Card */}
        <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold opacity-90">Badges Earned</h3>
            <Gift size={20} />
          </div>
          <p className="text-3xl font-bold">{stats.badges}</p>
          <p className="text-xs opacity-75 mt-2">Keep it up! 🎉</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.length > 0 ? (
            recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">{activity.subject}</p>
                  <p className="text-sm text-gray-600">{activity.difficulty} • {activity.timestamp}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-blue-600">{activity.score}/100</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">Start learning to see your activity!</p>
          )}
        </div>
      </div>
    </div>
  );
};