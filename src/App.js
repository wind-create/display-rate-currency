import './App.css';
import React from 'react'
import Currency from './component/Currency';
import styled from "styled-components";

function App() {

  return (
    <MainContentStyled>
      <Currency />
    </MainContentStyled>
  );
}
const MainContentStyled = styled.main`

`
export default App;
