import styled from 'styled-components';

const windowHeight = window.innerHeight;
const wrapperFlexDirection = windowHeight > 730 ? 'column' : 'row';
const buttonsFlexDirection = windowHeight > 730 ? 'row' : 'column';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100vh;
  outline: none;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: ${wrapperFlexDirection};
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 0 auto;

  .display {
    display: flex;
    flex-direction: ${buttonsFlexDirection};
    justify-content: space-between;
    width: 380px;
  }
`;
