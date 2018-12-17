import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


import * as styles from '../../../../utils/commonStyles';

export const Container = styled(Link).attrs({
  to: `/detailed`
})`
  max-width: 230px;
  margin: 6px;
  
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%
  max-height: 200px
  
  border-radius: 8px;
  object-fit: cover;
`;


export const Title = styled.p`
  max-height: 60px;

  display: block;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
  white-space: initial;

  font-weight: normal;
  font-size: ${styles.fontSizeMedium};
  
  margin: 0 auto;
`;
