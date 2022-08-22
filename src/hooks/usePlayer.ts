import { useCallback, useState } from 'react';
import _ from 'lodash';
import { STAGE_WIDTH } from '../setup';
import { STAGE } from '../Components/Stage/Stage';
import { isColliding, randomTetromino } from '../gameHelpers';

export type PLAYER = {
  pos: {
    x: number;
    y: number;
  }
  tetromino: (string | number)[][];
  collided: boolean;
}

export const usePlayer = () => {
  const [player, setPlayer] = useState({} as PLAYER);

  const rotate = (matrix: PLAYER['tetromino']) => {
    const mtrx = matrix.map((item, i) => matrix.map((column) => column[i]));

    return mtrx.map((row) => row.reverse());
  };

  const playerRotate = (stage: STAGE): void => {
    const clonedPlayer = _.cloneDeep(player);
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino);

    const posX = clonedPlayer.pos.x;
    let offset = 1;
    while (isColliding(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > clonedPlayer.tetromino[0].length) {
        clonedPlayer.pos.x = posX;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }: { x: number, y: number, collided: boolean}): void => {
    setPlayer({
      ...player,
      pos: { x: (player.pos.x += x), y: (player.pos.y += y) },
      collided,
    });
  };

  const resetPlayer = useCallback(
    (): void => setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    }),
    [],
  );

  return {
    player, updatePlayerPos, resetPlayer, playerRotate,
  };
};
