import styled from 'styled-components';
import {Link} from 'react-router-dom';

import * as styles from '../../utils/commonStyles';

export const Container = styled.div`
  width: 100%
  height: 100%
  
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: ${styles.fontSizeHuge};
  margin: 30px 0;
  text-align: center;
`;

export const MockedGif = styled.img`
  max-width: 600px
  height: 400px
  
  display: block;
  margin-left: auto;
  margin-right: auto;
  
  border-radius: 10px;
`;
