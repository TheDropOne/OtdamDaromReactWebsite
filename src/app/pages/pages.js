import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout/layout';
import Header from '../components/Header/header';

import Adlist from './AdList/adlist';
import DetailedAd from './DetailedAd/detailedAd';
import Map from './Map/map';
import CreateAd from './CreateAd/createAd';
import UserAds from './UserAds/userAds';

const Pages = () => (
  <Layout header={<Header />}>
    <Switch>
      <Route path="/" exact component={Adlist} />
      <Route path="/detailed" exact component={DetailedAd} />
      <Route path="/map" exact component={Map} />
      <Route path="/create" exact component={CreateAd} />
      <Route path="/userAds" exact component={UserAds} />
      {/*<Route path="/next" exact component={Adlist} />*/}
    </Switch>
  </Layout>
);

export default Pages;