// controllers/transactionController.js

const { Transactions } = require('../models'); // Adjust the path as necessary

exports.addTransaction = async (req, res) => {
  try {
    const { amountGiven, orNumber, description, total, purchaser, employeeId, personalContributions, storeName, receipts } = req.body;

    // Create a new transaction
    const transaction = await Transactions.create({
      AmountGiven: amountGiven,
      ORNumber: orNumber,
      Description: description,
      Total: total,
      Purchaser: purchaser,
      EmployeeID: employeeId,
      PersonalContributions: personalContributions,
      StoreName: storeName,
      Receipts: receipts, // Ensure this is a Buffer if you're handling file uploads
    });

    return res.status(201).json({ message: 'Transaction added successfully', transaction });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred while adding the transaction', error });
  }
};

module.exports = transactionController;
