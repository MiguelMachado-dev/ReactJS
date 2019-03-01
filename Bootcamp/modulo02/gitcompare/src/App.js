import React, { Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';

const Title = styled.h1`
  color: #f00;
  font-size: 32px;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <header className="App-header">
      <Title>Hello World</Title>
    </header>
  </Fragment>
);

export default App;
