const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Route to add a new transaction
router.post('/transactions', transactionController.createTransaction);

// Additional routes can be added here

module.exports = router;
