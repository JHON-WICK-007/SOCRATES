const mongoose = require('mongoose');

const studyRoomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    activeMembers: { type: Number, default: 1 },
    maxCapacity: { type: Number, default: 8 },
    hostName: { type: String, required: true },
    tag: { type: String, default: 'Public' },
    isPrivate: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('StudyRoom', studyRoomSchema);
