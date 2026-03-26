const express = require('express');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/public', (req, res) => {
  res.json({ message: 'Public endpoint, no auth required' });
});

router.get('/profile', authMiddleware, (req, res) => {
  const user = req.user;
  res.json({ message: 'Secure profile data', user });
});

module.exports = router;
