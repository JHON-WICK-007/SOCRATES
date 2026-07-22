const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    courseCount: { type: Number, required: true, default: 0 },
    iconName: { type: String, default: 'BookOpen' },
    slug: { type: String, required: true, unique: true, lowercase: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
