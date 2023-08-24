const IncomeSchema =  require("../models/IncomeModel");


exports.addIncome = async(req, res) => {
   try {
    const {title, amount, category, description, date} = req.body;

    if(!title || !amount || !category || !date || !description) {
        return res.status(400).json({
            message: "All fields are required!"
        });
    }

    if(amount <= 0 || amount === "number") {
        return res.status(400).json({
            message: "Amount must be a positive number"
        });
    }

    const income = new IncomeSchema({
        title,
        amount,
        category,
        date,
        description
    });
    await income.save();
    res.status(200).json({message:'Income added successfully!'})
   } catch (err) {
    res.status(500).json({message: 'Server Error', err})
   }
}
//get all incomes =>/api/v1/getIncomes
exports.getAllIncomes = async(req, res) => {
    try {
        const incomes = await IncomeSchema.find({id: req.params.id}).sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (err) {
        res.status(500).json({message: 'Server error!', err})
    }
}

exports.deleteIncome = async (req, res) => {
    try {
        const income = await IncomeSchema.findById(req.params.id)

        if(!income) {
            return res.status(401).json({message: 'Income not found!'})
        }
        await IncomeSchema.findOneAndDelete(req.params.id)
        res.status(200).json({message: 'Income deleted!'})
        } catch (err) {
            res.status(500).json({message: 'Server error!', err})
    }
}