import React, { useState } from 'react';

export default function QuestionCard({ question, showAnswer, onAnswerSelect }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onAnswerSelect(question.id, option);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-success/20 border-success';
      case 'medium':
        return 'bg-warning/20 border-warning';
      case 'hard':
        return 'bg-error/20 border-error';
      default:
        return 'bg-base-200 border-base-content/20';
    }
  };

  return (
    <div className="bg-base-100 rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">
              {question.subject}
            </span>
            <span className="bg-base-200 text-base-content text-xs px-2 py-1 rounded">
              {question.topic}
            </span>
          </div>
          <div className={`ml-4 p-2 rounded-full cursor-pointer ${
            isBookmarked ? 'text-red-500' : 'text-base-content/50 hover:text-red-500'
          }`} onClick={() => setIsBookmarked(!isBookmarked)}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-medium text-base-content mb-4">
          {question.question}
        </h3>
        <div className="space-y-3 mb-4">
          {question.options.map((option, index) => (
            <label key={index} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                className="radio radio-primary"
              />
              <span className="text-base-content">{option}</span>
            </label>
          ))}
        </div>
        {showAnswer && (
          <div className="mt-4 p-3 bg-base-200 rounded-lg">
            <p className="text-sm font-medium text-base-content mb-2">Correct Answer:</p>
            <p className="text-base-content">{question.correctAnswer}</p>
            <p className="text-sm font-medium text-base-content mt-2 mb-2">Explanation:</p>
            <p className="text-base-content">{question.explanation}</p>
          </div>
        )}
      </div>
    );
  }
