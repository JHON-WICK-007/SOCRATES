const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true, lowercase: true },
    role: { type: String, enum: ['student', 'tutor', 'general'], default: 'general' },
    source: { type: String, default: 'homepage' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', leadSchema);
