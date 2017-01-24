import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LandingPageContainer from './containers/landing-page-container'

const allRoutes = () => {
  return (
    <Route path="/" component={LandingPageContainer}>

      <IndexRoute component={LandingPageContainer} />

    </Route>
  );
};

export default allRoutes;
