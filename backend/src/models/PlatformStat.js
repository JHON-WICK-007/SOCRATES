const mongoose = require('mongoose');

const platformStatSchema = new mongoose.Schema(
  {
    numericValue: { type: Number, required: true },
    suffix: { type: String, required: true },
    label: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PlatformStat', platformStatSchema);
