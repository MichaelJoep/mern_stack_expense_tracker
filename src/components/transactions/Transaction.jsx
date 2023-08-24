import React from 'react';
import { InnerLayout } from '../../styles/Layout';
import { styled } from 'styled-components';
import History from '../history/History';
import { useGlobalContext } from '../../context/globalContext';



const TransactionStyled = styled.div`
  .history_con {
    display: flex;
    gap: 2rem;
    width: 100%;


    @media (max-width: 988px){
      flex-direction: column;
    }

    .con_left {
      flex: 2;
     }

    .con_right {
      flex: 1;
      

      .detail_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        font-size: 0.9rem;

        span {
          font-size: 1.2rem;
        }
      }

      .item_amount {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #f8f2f2e7;
        box-shadow: .1rem .2rem .9rem rgba(0, 0, 0, 0.1);   
        border-radius: 20px;
        padding: 1rem;
        margin-bottom: 8rem;
      }
    }
    }
  }
`;

const Transaction = () => {
  const {incomes, expenses} = useGlobalContext();

  return (
    <TransactionStyled>
        <InnerLayout>
         <div className="history_con">
          <div className="con_left">
            <History />
            </div>
            <div className="con_right">
              <h2 className="detail_title">Min<span>Salary</span>Max</h2>
              <div className="item_amount">
                <p>
                  {Math.min(...incomes.map((item) =>item.amount)).toLocaleString('en-US', {
                          minimumFractionDigits:2,
                           maximumFractionDigits:2
                     })}
                </p>
                <p>
                  {Math.max(...incomes.map((item) =>item.amount)).toLocaleString('en-US', {
                          minimumFractionDigits:2,
                           maximumFractionDigits:2
                     })}
                </p>
              </div>
              <h2 className="detail_title">Min<span>Expense</span>Max</h2>
              <div className="item_amount">
                <p>
                  {Math.min(...expenses.map((item) =>item.amount)).toLocaleString('en-US', {
                          minimumFractionDigits:2,
                           maximumFractionDigits:2
                     })}
                </p>
                <p>
                  {Math.max(...expenses.map((item) =>item.amount)).toLocaleString('en-US', {
                          minimumFractionDigits:2,
                           maximumFractionDigits:2
                     })}
                </p>
              </div>
            </div>
          </div>
        </InnerLayout>
    </TransactionStyled>
  )
}

export default Transaction