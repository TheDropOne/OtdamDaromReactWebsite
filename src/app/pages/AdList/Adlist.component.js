import React from 'react';
import request from 'request';
import * as params from '../../../thirdparty/params';

import PreviewAd from './components/PreviewAd/previewAd';

import * as SC from './Adlist.styled';

class Adlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(params.THIRD_PARTY_API.OD_API_POSTS_URL)
      .then(response => response.json())
      .then(data => this.setState({data}));
  }

  render() {
    if (!this.state.data) return <></>;
    return (
      <>
        <SC.PageTitle>There are {this.state.data.length} freebies in your region!</SC.PageTitle>
        <SC.ParagraphHeader>Recently added freebies</SC.ParagraphHeader>
        <SC.ContentGrid>
          {
            this.state.data.map((item, it) =>
              <PreviewAd prop={item} key={it}/>)
          }
        </SC.ContentGrid>
        <SC.ButtonNext>></SC.ButtonNext>
      </>
    )
  }

}


export default Adlist;
