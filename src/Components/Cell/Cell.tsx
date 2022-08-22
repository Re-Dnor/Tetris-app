import React from 'react';
import { StyledCell } from './Cell.styles';
import { TETROMINOS } from '../../setup';

type Props = {
  type: keyof typeof TETROMINOS;
}

function Cell({ type }: Props) {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color} />
  );
}

export default React.memo(Cell);
