import React, {useState} from 'react';
import { styled } from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none; 
        padding: .5rem 1rem;
        border: 2px solid #f5ebeb;
        border-radius: 5px;
        background: transparent;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        resize: none;

        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input_control {
        input {
            width: 100%;
        }
    }
    .selects {
        display: flex;
        justify-content: flex-end;

        select {
            color: rgba(34, 34, 96, 0.4);

            &:focus, &:active {
                color: rgba(34, 34, 96, 1);
            }
        }
    }

  .submit_btn {
    
    button {
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);

        &:hover {
            background: var(--primary-color); 
        }
      } 
   }
`;

const Form = () => {
    const {addIncome, getIncomes} = useGlobalContext();
    // console.log(addIcome)

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: ''
    })

    const {title, amount, date, category, description} = inputState;

    const handleInput = (name) => e => {
        setInputState({...inputState, [name]: e.target.value});
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addIncome(inputState);
        getIncomes();

        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: ''
        });
    }

  return (
    <FormStyled onSubmit={handleSubmit}>
        <div className="input_control">
            <input 
                type="text" 
                name={'title'}
                value={title}
                placeholder='Income Caption'
                onChange={handleInput('title')}
            />
        </div>
        <div className="input_control">
            <input 
                    type="number" 
                    name={'amount'}
                    value={amount}
                    placeholder='Income Amount'
                    onChange={handleInput('amount')}
            />
        </div>
        
        <div className="input_control">
            <DatePicker 
                id =''
                placeholderText="Enter A Date"
                selected={date}
                dateFormat = "dd/MM/yyyy"
                onChange={(date) => {
                    setInputState({...inputState, date: date})
                }}
            />
        </div>
        <div className="selects input_control">
            <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value="" disabled>Select Option</option>
                <option value="freelancing">Freelancing</option>
                <option value="salary">Salary</option>
                <option value="investments">Investments</option>
                <option value="stocks">Stocks</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="bank">Bank Transfer</option>
                <option value="youtube">YouTube</option>
                <option value="others">Others</option>
            </select>
        </div>
        <div className="input_control">
            <textarea 
                name="description" 
                id="description" 
                value={description} 
                placeholder='Enter a Reference' 
                cols="30" rows="4" 
                onChange={handleInput('description')}
                >
            </textarea>
        </div>
        <div className="submit_btn">
            <Button 
                name={'Add Income'}
                icon={plus}
                bg={'var(--color-ascent)'}
                bPad={'.6rem 1.2rem'}
                bRad={'30px'}
                color={'#fff'}
            />
            
        </div>
    </FormStyled>
  )
}

export default Form