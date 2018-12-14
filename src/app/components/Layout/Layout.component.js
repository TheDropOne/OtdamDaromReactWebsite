import React from 'react';
import * as SC from './Layout.styled';
import * as CR from "../../utils/commonResources";

const Layout = ({ children, header }) => (
  <SC.Wrapper>
    <SC.Main>
      {header}
      <SC.Section>
        {children}
      </SC.Section>

      <SC.Footer>
        <SC.CompanyLogo src={CR.companyLogo}/>© Studios, 2018</SC.Footer>
    </SC.Main>
  </SC.Wrapper>
);

export default Layout;
