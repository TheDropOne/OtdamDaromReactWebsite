import React from 'react';

import * as SC from './Header.styled';
import * as CR from '../../utils/commonResources'

const Header = () => (
  <SC.Header>
    <SC.Title>Otdam Darom</SC.Title>

    <SC.MapView>Switch to map</SC.MapView>
    <SC.CreateAd>Create ad</SC.CreateAd>

    <SC.Profile>
      My Freebies
      <SC.Avatar src={CR.profileLogoImage} />
    </SC.Profile>

  </SC.Header>
);

export default Header;
