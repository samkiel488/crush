import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../store/slices/questionsSlice';

const QuestionCard = ({ question, showAnswer = false, onAnswerSelect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((state) => state.questions);

  const isBookmarked = bookmarks.includes(question.id);

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(question.id));
    } else {
      dispatch(addBookmark(question.id));
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (onAnswerSelect) {
      onAnswerSelect(question.id, answer);
    }
  };

  const getOptionClass = (option) => {
    if (!showAnswer) {
      return selectedAnswer === option
        ? 'bg-blue-100 border-blue-300'
        : 'hover:bg-gray-50';
    }

    if (option === question.correctAnswer) {
      return 'bg-green-100 border-green-300 text-green-800';
    }

    if (selectedAnswer === option && option !== question.correctAnswer) {
      return 'bg-red-100 border-red-300 text-red-800';
    }

    return 'opacity-50';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {question.subject}
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {question.topic}
            </span>
            <span className={`text-xs px-2 py-1 rounded ${
              question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {question.difficulty}
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {question.question}
          </h3>
        </div>

        <button
          onClick={handleBookmark}
          className={`ml-4 p-2 rounded-full ${
            isBookmarked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
        >
          {isBookmarked ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            disabled={showAnswer}
            className={`w-full text-left p-3 border-2 rounded-lg transition-colors ${getOptionClass(option)}`}
          >
            <span className="font-medium mr-2">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </button>
        ))}
      </div>

      {showAnswer && question.explanation && (
        <div className="mt-4">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {showExplanation ? 'Hide' : 'Show'} Explanation
          </button>

          {showExplanation && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{question.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
