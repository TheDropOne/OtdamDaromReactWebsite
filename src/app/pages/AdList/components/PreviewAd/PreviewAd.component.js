import React from 'react';

import * as SC from './PreviewAd.styled';

class PreviewAd extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props ? this.props.prop : {post_id:1, post_title:'No data', post_favicon_url:'https://zdnet1.cbsistatic.com/hub/i/2016/12/21/f110acb4-81a4-450b-b1cf-796277bdc0f3/ddfb9d5d91f226bd6ad19e160168e95f/bw-no-data.png'};
    return (
      <SC.Container link={data.post_id}>
        <SC.Image src={data.post_favicon_url} alt={data.post_title}/>
        <SC.Title>{this.props.post_title}</SC.Title>
      </SC.Container>
    )
  }
}

export default PreviewAd;
