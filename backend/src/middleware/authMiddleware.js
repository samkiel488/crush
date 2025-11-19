const jwt = require('jsonwebtoken');
const User = require('../modules/auth/model');

const authMiddleware = async (req, res, next) => {
  try {
    let token;

    // Check for token in header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    // Check for token in cookies (if using cookies)
    if (!token && req.cookies.token) {
      token = req.cookies.token;
    }

    // Make sure token exists
    if (!token) {
      return res.status(401).json({
        status: 'error',
        message: 'Not authorized to access this route'
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

      // Find user by id
      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(401).json({
          status: 'error',
          message: 'No user found with this token'
        });
      }

      req.user = user;
      next();
    } catch (err) {
      return res.status(401).json({
        status: 'error',
        message: 'Not authorized to access this route'
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Server error'
    });
  }
};

module.exports = { authMiddleware };
