import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import EnvironmentMain from './EnvironmentMain/EnvironmentMain';

const EnvironmentPage = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={'/environments/add'} />
      <Route exact path={'/environments/edit/:id'} />
      <Route exact path={'/environments/info/:id'} />
      <Route path={'/environments'} component={EnvironmentMain} />
    </Switch>
  );
};

export default EnvironmentPage;
