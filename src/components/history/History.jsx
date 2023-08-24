import React from 'react';
import { styled } from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

const HistoryStyled = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  .history_item {
    background: #FCF6F9;
    border: 2px solid #f8f2f2e7;
    box-shadow: .1rem .2rem .9rem rgba(0, 0, 0, 0.1);   
    border-radius: 20px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const History = () => {

   const {transactionHistory} = useGlobalContext();

   const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h2>Recent Transaction History</h2>
      {history.map((item) => {
        const {_id, title,amount, type} = item;
        return (
          <div key={_id} className="history_item">
            <p style={{
                color: type === 'expense' ? 'red' : 'var(--color-green)'}}>
                {title}
            </p>
            <p style={{
                color: type === 'expense' ? 'red' : 'var(--color-green)'}}>
                {
                  type === 'expense' ? `-${amount.toLocaleString('en-US', {
                    minimumFractionDigits:2,
                     maximumFractionDigits:2
               })}` : 
               `+${amount.toLocaleString('en-US', {
                 minimumFractionDigits:2,
                 maximumFractionDigits:2
           })}`
                }
            </p>
            
          </div>
        )
      })}
    </HistoryStyled>
  )
}

export default History