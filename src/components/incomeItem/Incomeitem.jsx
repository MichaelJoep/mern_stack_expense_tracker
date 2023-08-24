import React from 'react';
import { styled } from 'styled-components';
import { bitcoin, book, calendar, card, circle, clothing, comment, dollar, food, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/icons';
import Button from '../Button/Button';
import { freelance } from '../../utils/icons';


const IncomeitemStyled = styled.div`
    background: transparent;
    border: 2px solid #f8f2f2e7;
    box-shadow: .1rem .2rem .9rem rgba(0, 0, 0, 0.1);             
    border-radius: 20px;
    padding: .6rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
    color: #222260;

    .icon {
        width: 70px;
        height: 70px;
        border-radius: 20px;
        font-size: 2rem;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #fff;
    }
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;

        h5 {
            font-size: 1rem;
            padding-left: 2rem;
            position: relative;
            &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background:${props => props.indicator};
            }
        }
        .inner_content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            font-size: 14px;
            .text{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1.5rem;
                P{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }

    }
`;

const Incomeitem = ({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) => {

    const categoryIcon = () => {
        switch(category) {
            case "freelancing":
                return freelance;
            case 'salary':
                return money;
            case "investments":
                return stocks;
            case "stocks":
                return users;
            case "bitcoin":
                return bitcoin;
            case "bank":
                return card;
            case "youtube":
                return yt;
            case "others":
                return piggy;
            default:
                return ''

        }
    }

    const expenseCatIcon = () => {
        switch(category){
            case "education":
                return book;
            case "groceries":
                return food;
            case "health":
                return medical;
            case "subscriptions":
                return tv;
            case "takeaway":
                return takeaway;
            case "clothing":
                return clothing;
            case "travelling":
                return freelance;
            case "others":
                return circle;
            default:
                return "";
        }
    }

  return (
    <IncomeitemStyled indicator={indicatorColor}>
      <div className="icon">
        {type === 'expense' ? expenseCatIcon() : categoryIcon()}
      </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner_content">
                <div className="text">
                    <p>{dollar} {amount.toLocaleString('en-US', {
                           minimumFractionDigits:2,
                           maximumFractionDigits:2
                     })}</p>
                    <p>{calendar} {date}</p>
                    <p>{comment} {description}</p>
                </div>
                <div className="btn_container">
                    <Button 
                        icon={trash}
                        bPad={'1rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color)'}
                        color={'#fff'}
                        hColor = {'var(--color-green)'}
                        onClick={()=> deleteItem(id)}
                    />
                </div>
            </div>
        </div>
    </IncomeitemStyled>
  )
}

export default Incomeitem