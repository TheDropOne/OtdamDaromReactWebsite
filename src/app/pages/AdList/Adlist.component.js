import React from 'react';

import PreviewAd from './components/PreviewAd/previewAd';

import * as SC from './Adlist.styled';

const Adlist = () => (
  <>
    <SC.PageTitle>In your region</SC.PageTitle>
    <SC.ParagraphHeader>Recently added freebies</SC.ParagraphHeader>
    <SC.ContentGrid>
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
      <PreviewAd />
    </SC.ContentGrid>
    <SC.ButtonNext>></SC.ButtonNext>
  </>
);

export default Adlist;
