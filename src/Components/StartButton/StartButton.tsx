import React from 'react';
import { StyledStartButton } from './StartButton..styles';

type Props = {
  callback: () => void;
}

function StartButton({ callback }: Props) {
  return (
    <StyledStartButton onClick={callback}>
      Start Game
    </StyledStartButton>
  );
}

export default StartButton;
