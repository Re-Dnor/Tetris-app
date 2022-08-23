import styled, { keyframes } from 'styled-components';

const smoothAnimation = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`;

export const StyledModalWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  outline: none;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0, 0.5);
  animation: ${smoothAnimation} 2s;
`;

export const StyledModal = styled.div`
  width: 300px;
  height: 150px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 2px solid white;
  color: white;
`;

export const CloseModal = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;

  &:hover {
opacity: 1;
};

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    display: block;
    width: 24px;
    height: 3px;
    background: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
