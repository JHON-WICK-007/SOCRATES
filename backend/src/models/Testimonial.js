const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    role: { type: String, required: true },
    university: { type: String, default: '' },
    quote: { type: String, required: true },
    rating: { type: Number, default: 5 },
    avatarUrl: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);
