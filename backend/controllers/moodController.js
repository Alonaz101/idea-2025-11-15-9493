const MoodEntry = require('../models/moodEntry');

const submitMood = async (req, res) => {
  try {
    const { mood, note } = req.body;
    const userId = req.user.id;
    if (!mood) return res.status(400).json({ message: 'Mood is required' });

    const entry = new MoodEntry({ userId, mood, note });
    await entry.save();

    res.status(201).json({ message: 'Mood entry saved', entry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while submitting mood' });
  }
};

module.exports = { submitMood };
