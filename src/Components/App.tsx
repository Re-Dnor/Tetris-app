import React, { useState } from 'react';
import { createStage } from '../gameHelpers';
// Components
import Stage from './Stage/Stage';
import Display from './Display/Display';
import StartButton from './StartButton/StartButton';

// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

function App() {
  const [dropTime, setDropTime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(true);

  return (
    <StyledTetrisWrapper role="button" tabIndex={0}>
      <StyledTetris>
        <div className="display">
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text="Game Over!" />
              <StartButton callback={() => null} />
            </>
          ) : (
            <>
              <Display text="Score: " />
              <Display text="Rows: " />
              <Display text="Level: " />
            </>
          )}
        </div>
        <Stage stage={createStage()} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default App;
