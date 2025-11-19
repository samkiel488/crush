const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Please add a question'],
    trim: true
  },
  options: [{
    type: String,
    required: true
  }],
  correctAnswer: {
    type: String,
    required: [true, 'Please add the correct answer']
  },
  explanation: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    required: [true, 'Please add a subject'],
    enum: ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Government', 'Literature', 'Geography', 'Commerce']
  },
  topic: {
    type: String,
    required: [true, 'Please add a topic'],
    trim: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
