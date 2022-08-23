import React from 'react';
import { StyledModal, StyledModalWrapper, CloseModal } from './Modal.styles';

type Props = {
  callback: (e: React.MouseEvent) => void;
  text?: string;
}

function Modal({ callback, text }: Props) {
  return (
    <StyledModalWrapper onClick={callback}>
      <StyledModal>
        {text}
        <CloseModal onClick={callback} />
      </StyledModal>
    </StyledModalWrapper>
  );
}

export default Modal;
