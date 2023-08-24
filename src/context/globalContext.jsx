import React, { useContext, useState } from 'react';
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({children}) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    //calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add_income`, income)
                .catch((err) => {
                    setError(err.response?.data.message);
                })
                getIncomes();
    }

    const getIncomes = async() => {
        const getResponse = await axios.get(`${BASE_URL}get_incomes`)
        setIncomes(getResponse?.data);
        console.log(getResponse?.data)
        
    }
    

    const deleteIncome = async(id) => {
        const delResponse = await axios.delete(`${BASE_URL}delete_income/${id}`)
        getIncomes();
    }

    const totalIncome = () => {
        let totalIncome = 0;

        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount;
        })
        return totalIncome;
    }
    //console.log("Total: ", totalIncome());


    //calculate expense
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add_expense`, expense)
                .catch((error) => {
                    setError(error.response?.data.message);
                })
                getExpenses();
    }

    const getExpenses = async() => {
        const getResponse = await axios.get(`${BASE_URL}get_expenses`)
        setExpenses(getResponse?.data);
        console.log(getResponse?.data)
        
    }
    

    const deleteExpense = async(id) => {
        const delResponse = await axios.delete(`${BASE_URL}delete_expense/${id}`)
        getExpenses();
    }

    const totalExpense = () => {
        let totalExpense = 0;

        expenses.forEach((expense) => {
            totalExpense = totalExpense + expense.amount;
        })
        return totalExpense;
    }
    
    //console.log("Total: ", totalExpense());

    //calculate total balance
    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history;
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            totalIncome,
            incomes,
            deleteIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpense,
            expenses,
            totalBalance,
            transactionHistory

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}