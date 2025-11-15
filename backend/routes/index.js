const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const moodController = require('../controllers/moodController');
const recipeController = require('../controllers/recipeController');
const { authMiddleware } = require('../config/auth');

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Mood routes (requires auth)
router.post('/mood', authMiddleware, moodController.submitMood);

// Recipe routes
router.get('/recipes', authMiddleware, recipeController.getRecipesByMood);
router.get('/recipes/:id', authMiddleware, recipeController.getRecipeDetails);

module.exports = router;
