import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SearchResultContainer from './containers/search-results';
import LandingPageContainer from './containers/landing-page-container';
import MostInstalledContainer from './containers/most-installed-container';

const allRoutes = () => {
  return (
    <Route path="/" component={LandingPageContainer}>
      <IndexRoute component={MostInstalledContainer} />
      <Route path='/results' component={SearchResultContainer} />
    </Route>
  );
};

export default allRoutes;
