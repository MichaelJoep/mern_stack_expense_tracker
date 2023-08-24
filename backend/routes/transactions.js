const express = require('express');
const { addIncome, getAllIncomes, deleteIncome } = require('../controller/income');
const { addExpense, getAllExpenses, deleteExpense } = require('../controller/expense');

const router = express.Router();

//@income route
//public -> /api/v1/
router.post("/add_income", addIncome);
router.get('/get_incomes', getAllIncomes);
router.delete("/delete_income/:id", deleteIncome);


//@expense route
//public -> /api/v1/
router.post("/add_expense", addExpense);
router.get('/get_expenses', getAllExpenses);
router.delete("/delete_expense/:id", deleteExpense);

module.exports = router;