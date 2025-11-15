const Recipe = require('../models/recipe');

const getRecipesByMood = async (req, res) => {
  try {
    const { mood } = req.query;
    if (!mood) return res.status(400).json({ message: 'Mood query parameter required' });

    const recipes = await Recipe.find({ moods: mood }).limit(20);
    res.json({ recipes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching recipes' });
  }
};

const getRecipeDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    res.json({ recipe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error fetching recipe details' });
  }
};

module.exports = { getRecipesByMood, getRecipeDetails };
