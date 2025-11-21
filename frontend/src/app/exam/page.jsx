'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startExam, submitAnswer, submitExamStart, submitExamSuccess, submitExamFailure } from '../../store/slices/examsSlice';
import { examsAPI } from '../../services/api';
import QuestionCard from '../../components/QuestionCard';
import ExamTimer from '../../components/ExamTimer';

export default function ExamPage() {
  const dispatch = useDispatch();
  const { currentExam, answers, isExamActive, loading } = useSelector((state) => state.exams);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Start exam when component mounts (in real app, this would be triggered by user action)
    if (!currentExam) {
      startMockExam();
    }
  }, []);

  const startMockExam = async () => {
    try {
      // In a real app, you'd fetch exam configuration from API
      const mockExam = {
        id: 'mock-exam-1',
        title: 'JAMB Mock Exam',
        duration: 120, // 2 hours in minutes
        questions: [
          {
            id: 'q1',
            question: 'What is the capital of France?',
            options: ['London', 'Berlin', 'Paris', 'Madrid'],
            correctAnswer: 'Paris',
            subject: 'General Knowledge',
            topic: 'Geography',
            difficulty: 'easy',
            explanation: 'Paris is the capital and most populous city of France.'
          },
          {
            id: 'q2',
            question: 'Solve for x: 2x + 3 = 7',
            options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
            correctAnswer: 'x = 2',
            subject: 'Mathematics',
            topic: 'Algebra',
            difficulty: 'easy',
            explanation: 'Subtracting 3 from both sides: 2x = 4. Dividing by 2: x = 2.'
          },
          // Add more questions as needed
        ]
      };

      dispatch(startExam(mockExam));
    } catch (error) {
      console.error('Failed to start exam:', error);
    }
  };

  const handleAnswerSelect = (questionId, answer) => {
    dispatch(submitAnswer({ questionId, answer }));
  };

  const handleSubmitExam = async () => {
    if (!currentExam) return;

    try {
      dispatch(submitExamStart());
      const result = await examsAPI.submitExam(currentExam.id, answers);
      dispatch(submitExamSuccess(result.data));
      alert('Exam submitted successfully!');
    } catch (error) {
      dispatch(submitExamFailure(error.message));
      alert('Failed to submit exam. Please try again.');
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentExam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (!currentExam) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-base-content/70">Loading exam...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = currentExam.questions[currentQuestionIndex];
  const answeredQuestions = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-base-100">
      <ExamTimer />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Exam Header */}
          <div className="bg-base-100 rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-base-content">{currentExam.title}</h1>
              <div className="text-sm text-base-content/70">
                Question {currentQuestionIndex + 1} of {currentExam.questions.length}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-base-content/70">
                Answered: {answeredQuestions} / {currentExam.questions.length}
              </div>
              <div className="w-full max-w-md bg-base-200 rounded-full h-2 ml-4">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(answeredQuestions / currentExam.questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Question */}
          <QuestionCard
            question={currentQuestion}
            onAnswerSelect={handleAnswerSelect}
          />

          {/* Navigation */}
          <div className="bg-base-100 rounded-lg shadow-md p-6 mt-6">
            <div className="flex justify-between items-center">
              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className="btn btn-ghost"
              >
                Previous
              </button>

              <div className="flex space-x-2">
                {currentExam.questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`btn btn-sm ${
                      index === currentQuestionIndex
                        ? 'btn-primary'
                        : answers[currentExam.questions[index].id]
                        ? 'btn-success'
                        : 'btn-ghost'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {currentQuestionIndex === currentExam.questions.length - 1 ? (
                <button
                  onClick={handleSubmitExam}
                  disabled={loading}
                  className="btn btn-success"
                >
                  {loading ? 'Submitting...' : 'Submit Exam'}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="btn btn-primary"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
