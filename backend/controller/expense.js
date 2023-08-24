const ExpenseSchema =  require("../models/ExpenseModel");


exports.addExpense = async(req, res) => {
   try {
    const {title, amount, category, description, date} = req.body;

    if(!title || !amount || !category || !description || !date) {
        return res.status(400).json({
            message: "All fields are required!"
        });
    }

    if(amount <= 0 || amount === "number") {
        return res.status(400).json({
            message: "Amount must be a positive number"
        });
    }

    const expense = new ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });
    await expense.save();
    res.status(200).json({message:'Expense added successfully!'})
   } catch (err) {
    res.status(500).json({message: 'Server Error', err})
   }
}
//get all incomes =>/api/v1/getIncomes
exports.getAllExpenses = async(req, res) => {
    try {
        const expense = await ExpenseSchema.find({id: req.params.id}).sort({createdAt: -1});
        res.status(200).json(expense);
    } catch (err) {
        res.status(500).json({message: 'Server error!', err})
    }
}

exports.deleteExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.findById(req.params.id);

        if(!expense) {
            return res.status(401).json({message: 'Expense not found!'})
        }
        await ExpenseSchema.findOneAndDelete(req.params.id)
        res.status(200).json({message: 'Expense deleted!'})
        } catch (err) {
            res.status(500).json({message: 'Server error!', err})
    }
}