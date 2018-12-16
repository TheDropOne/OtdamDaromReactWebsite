import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as styles from '../../utils/commonStyles';

export const Ad = styled.div`
  min-height: 700px;
  
  display: flex;
  justify-content: left;
  align-items: left;
`;

export const AdImage = styled.img`
  max-width: 35%
  height: 360px
  
  border-radius: 10px;
`;

export const TextContentContainer = styled.div`
  width: 100%;
  max-height: 360px;
  padding: 0px 20px;
  
`;

export const AdTitle = styled.h1`
  width: 100%;
  height: 36px;
 
  padding: 4px 0;
  
  display: block;
  text-overflow: ellipsis;
  white-space: initial;
    
  font-weight: normal;
  font-size: ${styles.fontTitle};
`;


export const AdDescription = styled.p`
  min-height: 230px;

  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  font-weight: normal;
  font-size: ${styles.fontDescription};
  
  margin: 16px auto;
`;

export const AdMeta = styled.p`
  max-height: 60px;

  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: initial;
  
  opacity: 50%;

  font-weight: normal;
  font-size: ${styles.fontMeta};
  font-style: italic;
`;

