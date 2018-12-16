import React from 'react';

import * as SC from './DetailedAd.styled';

const DetailedAd = () => (
  <SC.Ad>
    <SC.AdImage src="https://content.kufar.by/pictures/78/7884823264.jpg"/>
    <SC.TextContentContainer>
      <SC.AdTitle>Black ad title!</SC.AdTitle>
      <SC.AdDescription>Find all the advantages of free world in the description!</SC.AdDescription>
      <SC.AdMeta>Not so far ago...<br/>Brama CEO</SC.AdMeta>
    </SC.TextContentContainer>
  </SC.Ad>
);

export default DetailedAd;
