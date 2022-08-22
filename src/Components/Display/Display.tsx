import React from 'react';
import { StyledDisplay } from './Display.styles';

type Props = {
  gameOver?: boolean;
  text: string;
}

function Display({ gameOver, text }: Props) {
  return (
    <StyledDisplay gameOver={gameOver}>
      {text}
    </StyledDisplay>
  );
}

export default Display;
