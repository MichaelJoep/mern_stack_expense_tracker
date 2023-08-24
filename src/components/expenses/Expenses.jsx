import React, {useEffect} from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import Incomeitem from '../incomeItem/Incomeitem';
import ExpenseForm from './ExpenseForm';
import { dateFormat } from '../../utils/dateFormate';



const ExpensesStyled = styled.div`
  display: flex;
  overflow: auto;
  .total_expense {
    display: flex;
    justify-content:center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #f8f2f2e7;
    box-shadow: .1rem .2rem .9rem rgba(0, 0, 0, 0.1);   
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    gap: .5rem;

    span{
      font-size: 2.3rem;
      font-weight: 600;
      color: var(--color-delete);
    }
  }
  .expense-content {
    display: flex;
    gap: 2rem;

    @media (max-width: 1120px) {
      flex-direction: column;
    }
    .expense {
      flex: 1;
    }
  }
`;

const Expenses = () => {

  const {addExpense, getExpenses, deleteExpense, totalExpense, expenses} = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, [])

  return (
    <ExpensesStyled>
        <InnerLayout>
        <h1>Expenses</h1>
         <h2 className="total_expense">Total Expenses: 
         <span>
            ${totalExpense().toLocaleString('en-US', {
                minimumFractionDigits:2,
                maximumFractionDigits:2
           })}
         </span>
         </h2>
          <div className="expense-content">
            <div className="form-container">
              <ExpenseForm />
            </div>
            <div className="expense">
              {expenses.map((expense) => {
                const {_id, title, amount, date, category, description, type} = expense;
                return <Incomeitem 
                        key={_id}
                        id={_id}
                        title={title}
                        amount={amount}
                        date={dateFormat(date)}
                        category={category}
                        description={description}
                        type={type}
                        indicatorColor="var(--color-delete)"
                        deleteItem={deleteExpense}
                       />
              })}
            </div>
           </div>
        </InnerLayout>
    </ExpensesStyled>
  )
}

export default Expenses;