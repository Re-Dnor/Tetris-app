import React from 'react';
import * as _ from 'lodash';
import Cell from '../Cell/Cell';
import { StyledStage } from './Stage.styles';
import { TETROMINOS } from '../../setup';

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];

type Props = {
  stage: STAGE;
}

function Stage({ stage }: Props) {
  return (
    <StyledStage>
      {stage.map((row) => row.map((cell) => <Cell key={_.uniqueId('Cell-')} type={cell[0]} />))}
    </StyledStage>
  );
}

export default Stage;
