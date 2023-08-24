import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import { styled } from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormate';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #f8f2f2e7;
    box-shadow: .1rem .2rem .9rem rgba(0, 0, 0, 0.1);   
    border-radius: 20px;
    padding: 1rem;
    height: 100%;
`;

const Chart = () => {
    const {incomes, expenses} = useGlobalContext();

    const data = {
        labels: incomes?.map((inc) => {
            const {date} = inc;
            return dateFormat(date)
        }),
        datasets:[
            {
                label: 'Incomes',
                data: [
                    ...incomes?.map((income) => {
                        const {amount} = income;
                        return amount;
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses?.map((expense) => {
                        const {amount} = expense;
                        return amount;
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }

  return (
    <ChartStyled>
        <Line data={data}/>
    </ChartStyled>
  )
}

export default Chart