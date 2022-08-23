import React, { useState, useRef } from 'react';
import { createStage, isColliding } from '../gameHelpers';
// Custom hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';
// Components
import Stage from './Stage/Stage';
import Display from './Display/Display';
import StartButton from './StartButton/StartButton';
import Modal from './Modal/Modal';
// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

function App() {
  const [dropTime, setDropTime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const gameArea = useRef<HTMLDivElement>(null);

  const {
    player, updatePlayerPos, resetPlayer, playerRotate,
  } = usePlayer();
  const { stage, setStage, rowsCleared } = useStage(player, resetPlayer);
  const {
    score, setScore, rows, setRows, level, setLevel,
  } = useGameStatus(rowsCleared);

  const movePlayer = (dir: number) => {
    if (!isColliding(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false });
    }
  };

  const keyUp = ({ keyCode }: { keyCode: number}): void => {
    if (!gameOver) {
      if (keyCode === 40) {
        // change the droptime speed user releases down arrow
        setDropTime(1000 / level + 200);
      }
    }
  };

  const handleStartGame = (): void => {
    // need to focus the window with the key events on start
    if (gameArea.current) gameArea.current.focus();

    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(1);
    setRows(0);
    setGameOver(false);
  };

  const move = ({ keyCode, repeat }: { keyCode: number, repeat: boolean}) => {
    if (!gameOver) {
      switch (keyCode) {
        case 37: {
          movePlayer(-1);
          break;
        }
        case 39: {
          movePlayer(1);
          break;
        }
        case 40: {
          if (repeat) return;
          setDropTime(30);
          break;
        }
        case 38: {
          playerRotate(stage);
          break;
        }
        default: {
          break;
        }
      }
    }
  };

  const drop = (): void => {
    if (rows > level * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / level + 200);
    }

    if (!isColliding(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setShowModal(true);
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  return (
    <StyledTetrisWrapper role="button" tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
      {showModal && <Modal callback={handleCloseModal} text={`Score: ${score}`} />}
      <StyledTetris>
        <div className="display">
          {gameOver ? (
            <>
              <Display gameOver={gameOver} text="Game Over!" />
              <StartButton callback={handleStartGame} />
            </>
          ) : (
            <>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </>
          )}
        </div>
        <Stage stage={stage} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}

export default App;
