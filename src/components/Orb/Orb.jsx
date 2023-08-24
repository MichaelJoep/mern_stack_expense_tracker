import React from 'react';
import { keyframes, styled } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';


const Orb = () => {

    const {width, height} = useWindowSize();


const OrbMove = keyframes`
    0%{
        transform: translate(0, 0);
    }
    50%{
        transform: translate(${width}px, ${height}px);
    }
    100%{
        transform: translate(0, 0);
    }
`

const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    margin-left: -37rem;
    margin-top: -37rem;
    border-radius: 50%;
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(200px);
    animation: ${OrbMove} 15s alternate linear infinite;
`


  return (
    <OrbStyled>

    </OrbStyled>
  )
}

export default Orb