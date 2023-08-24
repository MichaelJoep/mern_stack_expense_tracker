import React from 'react';
import { styled } from 'styled-components';


const ButtonStyled = styled.button`
    font-family: inherit;
    font-size: inherit;
    display: flex;
    outline: none;
    border: none;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;

const Button = ({name, icon, color, onClick, bg, bPad, bRad}) => {
  return (
    <ButtonStyled style={{
        background: bg,
        padding: bPad,
        borderRadius:bRad,
        color: color
    }} onClick={onClick}>
        {icon}
        {name}
    </ButtonStyled>
  )
}

export default Button