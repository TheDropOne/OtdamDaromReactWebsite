import styled from 'styled-components';
import * as CR from '../../utils/commonResources'

import * as styles from '../../utils/commonStyles';

export const Wrapper = styled.div`
  width: 100%;
  color: ${styles.fontColor};

  
  background-image: url(${CR.backgroundMoneyImage});
`;

export const Main = styled.main`
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;

  
  background-color: hsl(0, 0%, 100%);
`;

export const Section = styled.section`
  padding: 30px 25px;
`;

export const Footer = styled.footer`
  border-top: 1px solid ${styles.borderColor};
  padding: 0 20px;
  height: 80px;

  color: #000000
  font-size: ${styles.fontSizeMedium};
  font-weight: normal;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompanyLogo = styled.img`
  height: 60px;
  object-fit: cover;
  
  margin-right: 4px
  padding-top: 4px
`;