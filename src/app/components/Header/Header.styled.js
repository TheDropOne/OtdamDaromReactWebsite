import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as styles from '../../utils/commonStyles';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 25px 0 25px;

  opacity: 0.9;
  border-bottom: 1px solid ${styles.borderColor};
`;

export const Title = styled(Link).attrs({
  to: '/',
})`
  font-family: "Roboto", Serif;
  color: #303F9F;
  margin: 0;
  text-align: center;
  
  font-weight: 600;
  font-size: ${styles.fontSizeLogo};

  margin-right: auto;
  padding: 24px 0;
`;

export const MapView =  styled(Link).attrs({
  to: '/map/',
})`
  max-width: 180px;
  
  font-size: ${styles.fontSizeSmall};
  color: #FFFFFF
  background-color: #1475dc;
  &:hover {
    background-color: #FFFFFF;
    color: #1475dc;
  }
  border-radius: 6px;
  border: 2px solid #1475dc;
  
  padding 5px 14px 7px 14px;
  margin 8px;
`;

export const CreateAd =  styled(Link).attrs({
  to: '/create/',
})`
  max-width: 180px;
  
  font-size: ${styles.fontSizeSmall};
  color: #FFFFFF
  background-color: #07ba00;
  &:hover {
    background-color: #FFFFFF;
    color: #07ba00;
  }
  border-radius: 6px;
  border: 2px solid #07ba00;
  
  padding 5px 14px 7px 14px;
  margin 8px;
`;

export const Avatar = styled.img`
  margin-left: 16px;

  width: 48px;
  height: 48px;
  object-fit: cover;

  border-radius: 100vmax;
  border: 2px solid #FFC0CB;
  
  padding: 4px
`;

export const Profile = styled(Link).attrs({
  to: '/userAds/',
})`
  display: flex;
  align-items: center;

  margin-left: auto;

  color: #000000
  font-style: italic;
  font-family: "Roboto", Serif;
  font-weight: normal;
  font-size: ${styles.fontSizeBig};
`;
