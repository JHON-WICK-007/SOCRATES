const Tutor = require('../models/Tutor');
const StudyRoom = require('../models/StudyRoom');
const Category = require('../models/Category');
const PlatformStat = require('../models/PlatformStat');
const FAQ = require('../models/FAQ');
const Testimonial = require('../models/Testimonial');
const Lead = require('../models/Lead');

// Fallback seed data if DB is empty or disconnected
const FALLBACK_DATA = {
  stats: [
    { numericValue: 50, suffix: 'K+', label: 'Students' },
    { numericValue: 10, suffix: 'K+', label: 'Sessions' },
    { numericValue: 2, suffix: 'K+', label: 'Tutors' },
    { numericValue: 95, suffix: '%', label: 'Satisfaction' },
  ],
  tutors: [
    {
      name: 'Dr. Evelyn Reed',
      subject: 'Algorithms & Data Structures',
      experience: '8+ yrs exp • Stanford PhD',
      rating: '4.98',
      reviews: '142 sessions',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Marcus Chen',
      subject: 'Linear Algebra & AI Foundations',
      experience: '6+ yrs exp • MIT Alum',
      rating: '4.95',
      reviews: '98 sessions',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Sophia Williams',
      subject: 'Quantum Mechanics & Physics',
      experience: '10+ yrs exp • Cambridge Postdoc',
      rating: '5.0',
      reviews: '210 sessions',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    },
  ],
  faqs: [
    {
      q: 'How does Socratic AI differ from standard ChatGPT or search engines?',
      a: 'Unlike general AI models that immediately give away raw code or answers, Socratic AI is engineered specifically for pedagogy. It analyzes your current knowledge level and prompts you with targeted sub-questions so you derive the concept yourself.',
    },
    {
      q: 'How are human tutors verified on SOCRATES?',
      a: 'Every human tutor undergoes a 3-stage vetting process: academic credentials verification (degree transcripts or research positions), a live technical teaching demonstration, and background checks.',
    },
    {
      q: 'Can I combine AI study sessions with human tutors?',
      a: 'Yes! That is the core architecture of SOCRATES. You can use Socratic AI to isolate your exact confusion points, and then book a targeted 20-minute session with a human tutor to resolve high-level intuition.',
    },
    {
      q: 'Are peer study rooms free to join?',
      a: 'Public peer study rooms are completely free for all registered SOCRATES users. Student Pro members can also spawn private invite-only study lounges.',
    },
    {
      q: 'How are AI Session Recaps created?',
      a: 'During live sessions, our AI transcribes audio and whiteboard notes in real time, automatically extracting key formulas, step-by-step algorithms, and downloadable flashcards.',
    },
  ],
  studyRooms: [
    { title: 'Calculus III & Multivariable Prep', subject: 'Mathematics', activeMembers: 5, maxCapacity: 8, hostName: 'Alex Mercer', tag: 'Live Session' },
    { title: 'LeetCode Hard & System Design', subject: 'Computer Science', activeMembers: 7, maxCapacity: 8, hostName: 'Priya Sharma', tag: 'Interview Prep' },
    { title: 'Organic Chemistry Synthesis', subject: 'Chemistry', activeMembers: 3, maxCapacity: 6, hostName: 'David Kim', tag: 'Peer Review' },
  ],
};

exports.getHomepageOverview = async (req, res) => {
  try {
    let stats = await PlatformStat.find().sort({ order: 1 });
    if (!stats || stats.length === 0) stats = FALLBACK_DATA.stats;

    let tutors = await Tutor.find({ isFeatured: true });
    if (!tutors || tutors.length === 0) tutors = FALLBACK_DATA.tutors;

    let faqs = await FAQ.find().sort({ order: 1 });
    if (!faqs || faqs.length === 0) faqs = FALLBACK_DATA.faqs;

    let studyRooms = await StudyRoom.find();
    if (!studyRooms || studyRooms.length === 0) studyRooms = FALLBACK_DATA.studyRooms;

    res.json({
      success: true,
      data: {
        stats,
        tutors,
        faqs,
        studyRooms,
      },
    });
  } catch (error) {
    res.json({
      success: true,
      data: FALLBACK_DATA,
      warning: 'Serving fallback data due to DB offline state',
    });
  }
};

exports.getStats = async (req, res) => {
  try {
    const stats = await PlatformStat.find().sort({ order: 1 });
    res.json({ success: true, data: stats.length > 0 ? stats : FALLBACK_DATA.stats });
  } catch (err) {
    res.json({ success: true, data: FALLBACK_DATA.stats });
  }
};

exports.getFeaturedTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find({ isFeatured: true });
    res.json({ success: true, data: tutors.length > 0 ? tutors : FALLBACK_DATA.tutors });
  } catch (err) {
    res.json({ success: true, data: FALLBACK_DATA.tutors });
  }
};

exports.getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find().sort({ order: 1 });
    res.json({ success: true, data: faqs.length > 0 ? faqs : FALLBACK_DATA.faqs });
  } catch (err) {
    res.json({ success: true, data: FALLBACK_DATA.faqs });
  }
};

exports.subscribeLead = async (req, res) => {
  try {
    const { email, role } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Valid email required' });
    }

    const lead = await Lead.create({ email, role: role || 'general' }).catch(() => null);
    res.json({
      success: true,
      message: 'Thank you for registering your interest with SOCRATES!',
      data: lead || { email, role: role || 'general' },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Could not process subscription' });
  }
};
