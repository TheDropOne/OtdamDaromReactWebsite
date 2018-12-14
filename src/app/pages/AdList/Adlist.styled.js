import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as styles from '../../utils/commonStyles';

export const PageTitle = styled.h1`
  font-size: ${styles.fontSizeHuge};
  margin-top: 30px;
`;

export const ParagraphHeader = styled.h2`
  margin-top: 70px;
  margin-bottom: 15px;

  font-weight: 400;
  color: #1475dc
  font-size: ${styles.fontSizeBig};
  text-align: center;

  padding-bottom: 5px;
  border-bottom: 1px solid ${styles.borderColor};

  ${PageTitle} + & {
    margin-top: 40px;
  }
`;
export const ContentGrid = styled.div`
  display: grid;
  max-width: 1340px;
  
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;

  grid-column-gap: 30px;
  grid-row-gap: 20px;
`;

export const ButtonNext = styled(Link).attrs({
  to: '/next/',
})`
  display: flex;
  max-width: 40px
  font-size: 20px;
  
  color: #FFFFFF;
  background-color: #1475dc;
  &:hover {
    background-color: #FFFFFF;
    color: #1475dc;
  }
  border: 2px solid #1475dc;
  
  padding: 9px 12px 9px 12px;
  margin-top: 15px;
  margin-left:48%;
  
  border-radius: 100vmax;
`;
