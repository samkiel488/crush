'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchDashboardStart,
  fetchDashboardSuccess,
  fetchDashboardFailure
} from '../../store/slices/dashboardSlice';
import { usersAPI } from '../../services/api';
import AnalyticsChart from '../../components/AnalyticsChart';

export default function DashboardPage() {
  const dispatch = useDispatch();
  const { stats, progress, loading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      dispatch(fetchDashboardStart());
      const [statsResponse, progressResponse] = await Promise.all([
        usersAPI.getProfile(),
        usersAPI.getProgress()
      ]);
      dispatch(fetchDashboardSuccess({
        stats: statsResponse.data.stats,
        progress: progressResponse.data
      }));
    } catch (error) {
      dispatch(fetchDashboardFailure(error.message));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading dashboard: {error}</p>
          <button
            onClick={fetchDashboardData}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Total Questions</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalQuestions}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-2xl">✅</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Exams Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedExams}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Average Score</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.averageScore}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="bg-red-100 p-3 rounded-full">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Weak Topics</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.weakTopics.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Progress Over Time</h2>
              <AnalyticsChart
                data={progress.map(p => ({ label: p.date, value: p.score }))}
                type="line"
              />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Subject Performance</h2>
              <AnalyticsChart
                data={[
                  { label: 'Mathematics', value: 85 },
                  { label: 'English', value: 78 },
                  { label: 'Physics', value: 92 },
                  { label: 'Chemistry', value: 88 },
                  { label: 'Biology', value: 76 }
                ]}
                type="bar"
              />
            </div>
          </div>

          {/* Weak Topics */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Areas for Improvement</h2>
            {stats.weakTopics.length === 0 ? (
              <p className="text-gray-600">Great job! No weak areas identified.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.weakTopics.map((topic, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800">{topic.name}</h3>
                    <p className="text-sm text-red-600">Score: {topic.score}%</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Focus on practicing more questions in this area.
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {progress.slice(0, 5).map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">Completed {activity.subject} Practice</p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{activity.score}%</p>
                    <p className="text-sm text-gray-600">Score</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
