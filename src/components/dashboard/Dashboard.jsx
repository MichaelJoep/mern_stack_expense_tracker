import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layout';
import Chart from '../chart/Chart';
import { bars, dollar } from '../../utils/icons';
import { useGlobalContext } from '../../context/globalContext';

const DashboardStyled = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
  }
 .stats_con {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 1rem;

    @media (max-width:1120px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .chart_con {
        grid-column: 1/4;
        height: 400px; 
    }
    .amount_con {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      text-align: center;

      @media (max-width:1120px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        
        .income, .expense {
          grid-column: span 2;
         
        }
        
        
        .balance {
          grid-column: 2 / 4;
          
        }
      }

      @media (max-width:998px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

        .income {
            p {
              color: var(--color-green);
            }
        }
       .expense {
          p {
            color: red;
          }
        }

      .income, .expense, .balance {
        background: #FCF6F9;
        border: 2px solid #f8f2f2e7;
        box-shadow: .1rem .2rem .9rem rgba(0, 0, 0, 0.1);   
        border-radius: 20px;
        padding: 1rem;

       
        p{
          font-size: 1.5rem;
          font-weight:700;
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
 }
  
`;

const Dashboard = () => {

  const {totalIncome, totalExpense, totalBalance, getIncomes, getExpenses} = useGlobalContext();
 

  useEffect(()=> {
    getIncomes()
    getExpenses()
  }, [])

  return (
    <DashboardStyled>
        <InnerLayout>
            <h1>All Transactions</h1>
            <div className="stats_con">
              <div className="chart_con">
                <Chart />
              </div>
              <div className="amount_con">
                  <div className="income">
                    <h2>Total Income</h2>
                    <p> {dollar}{totalIncome().toLocaleString('en-US', {
                          minimumFractionDigits:2,
                           maximumFractionDigits:2
                     })}</p>
                  </div>
                  <div className="expense">
                    <h2>Total Expenses</h2>
                    <p>{dollar}{totalExpense().toLocaleString('en-US', {
                          minimumFractionDigits:2,
                          maximumFractionDigits:2
                     })}</p>
                  </div>
                  <div className="balance">
                    <h2>Total Balance</h2>
                    <p>{dollar}{totalBalance().toLocaleString('en-US', {
                          minimumFractionDigits:2,
                          maximumFractionDigits:2
                     })}</p>
                  </div>
                </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}

export default Dashboard