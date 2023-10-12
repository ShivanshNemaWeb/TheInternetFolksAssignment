const express = require('express');
const router = express.Router();

const memberController = require('../controllers');

// Define the route for adding a member to a community
router.post('/member', memberController.addMember);

module.exports = router;
