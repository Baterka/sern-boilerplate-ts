const express = require('express');

const router = express.Router();

// Version 1
router.use('/v1', require('./v1'));

/**
 * Catch 404 and forward (API)
 */
// TODO: Error handler

/**
 * API error handler
 */
// TODO: Error handler

module.exports = router;
