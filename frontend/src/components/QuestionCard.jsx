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
