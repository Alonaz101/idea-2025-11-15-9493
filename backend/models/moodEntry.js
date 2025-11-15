const mongoose = require('mongoose');

const MoodEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  mood: { type: String, enum: ['happy', 'sad', 'anxious', 'stressed', 'excited', 'neutral'], required: true },
  note: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now, index: true }
});

module.exports = mongoose.model('MoodEntry', MoodEntrySchema);
