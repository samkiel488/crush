const express = require('express');
const {
  register,
  login,
  getProfile,
  updateProfile
} = require('./controller');
const { authMiddleware } = require('../../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);

module.exports = router;
