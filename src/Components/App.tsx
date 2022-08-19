import React from 'react';
// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

function App() {
  return (
    <StyledTetrisWrapper role="button" tabIndex={0}>
      <StyledTetris>
        <div>Hello</div>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default App;
