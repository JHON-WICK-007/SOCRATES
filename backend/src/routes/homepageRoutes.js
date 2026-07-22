const express = require('express');
const router = express.Router();
const {
  getHomepageOverview,
  getStats,
  getFeaturedTutors,
  getFAQs,
  subscribeLead,
} = require('../controllers/homepageController');

router.get('/overview', getHomepageOverview);
router.get('/stats', getStats);
router.get('/tutors/featured', getFeaturedTutors);
router.get('/faqs', getFAQs);
router.post('/leads/subscribe', subscribeLead);

module.exports = router;
