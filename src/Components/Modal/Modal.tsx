import React from 'react';
import { StyledModal, StyledModalWrapper, CloseModal } from './Modal.styles';
import StartButton from '../StartButton/StartButton';

type Props = {
  handleClose: (e: React.MouseEvent) => void;
  handleStart: () => void;
  text?: string;
}

function Modal({ handleClose, handleStart, text }: Props) {
  return (
    <StyledModalWrapper onClick={handleClose}>
      <StyledModal>
        {text}
        <CloseModal onClick={handleClose} />
        <StartButton callback={handleStart} />
      </StyledModal>
    </StyledModalWrapper>
  );
}

export default Modal;
