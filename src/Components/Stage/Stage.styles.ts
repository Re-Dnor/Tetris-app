import styled from 'styled-components';
import { STAGE_WIDTH, STAGE_HEIGHT } from '../../setup';

const windowHeight = window.innerHeight;
const stageSize = windowHeight > 768 ? 30 : 25;

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, ${stageSize}px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, ${stageSize}px);
  grid-gap: 1px;
  border: 2px solid #999;
  background: #222;
`;
