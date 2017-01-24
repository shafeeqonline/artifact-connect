import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LandingPageContainer from './containers/landing-page-container';
import MostInstalledContainer from './containers/most-installed-container';

const allRoutes = () => {
  return (
    <Route path="/" component={LandingPageContainer}>
      <IndexRoute component={MostInstalledContainer} />
    </Route>
  );
};

export default allRoutes;
