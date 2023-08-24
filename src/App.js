import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import {MainLayout} from "./styles/Layout";
import Orb from './components/Orb/Orb';
import Navigation from './components/navigation/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import Income from './components/incomes/Income';
import Expenses from './components/expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import Transaction from './components/transactions/Transaction';
import { bars } from './utils/icons';




const AppStyle = styled.div`
  height: 100vh;
  background-color: #fcf9f9;
  position: relative;

  main {
    flex: 1;
    background: #fff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1),
                -2px -2px 2px rgba(0, 0, 0, 0.1);
    border: 3px solid #ffffff;
    border-radius: 32px;
    backdrop-filter: blur(4.5px);
    overflow: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;


function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
 // console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return<Dashboard />
      case 2:
        return <Transaction />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

 

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  
  return (
    <AppStyle className="App">
      {orbMemo}
      
      <MainLayout>
        <Navigation  active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyle>
  );
}



export default App;
