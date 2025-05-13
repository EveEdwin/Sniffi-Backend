const express = require('express');
const router = express.Router();
const { savePageData, getPageData } = require('../controllers/pageController');

router.post('/save', savePageData);
router.get('/get/:pageType', getPageData);

module.exports = router;
