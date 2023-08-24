import React, {useEffect} from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../form/Form';
import Incomeitem from '../incomeItem/Incomeitem';
import { dateFormat } from '../../utils/dateFormate';


const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  .total_income {
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
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;

    @media (max-width: 1120px) {
      flex-direction: column;
    }
    .incomes {
      flex: 1;
    }
  }
`;

const Income = () => {
    const {addIcome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext();

    useEffect(() => {
      getIncomes();
    }, [])
  return (
    <IncomeStyled>
       <InnerLayout>
         <h1>Incomes</h1>
         <h2 className="total_income">Total Income:
          <span>${totalIncome().toLocaleString('en-US', {
           minimumFractionDigits:2,
           maximumFractionDigits:2
          })}
          </span>
          </h2>
          <div className="income-content">
            <div className="form-container">
              <Form />
            </div>
            <div className="incomes">
              {incomes.map((income) => {
                const {_id, title, amount, date, category, description, type} = income;
                return <Incomeitem 
                        key={_id}
                        id={_id}
                        title={title}
                        amount={amount}
                        date={dateFormat(date)}
                        category={category}
                        description={description}
                        type={type}
                        indicatorColor="var(--color-green)"
                        deleteItem={deleteIncome}
                       />
              })}
            </div>
           </div>
        </InnerLayout>
    </IncomeStyled>
  )
}

export default Income