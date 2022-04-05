import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import EnvironmentMain from './EnvironmentMain/EnvironmentMain';
import InfoEnvironment from './InfoEnvironment/infoEnvironment';
import AddEnvironment from './AddEnvironment/AddEnvironment';
import EditEnvironment from './EditEnvironment/EditEnvironment';

const EnvironmentPage = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={'/environments/add'} component={AddEnvironment} />
      <Route
        exact
        path={'/environments/edit/:id'}
        component={EditEnvironment}
      />
      <Route
        exact
        path={'/environments/info/:id'}
        component={InfoEnvironment}
      />
      <Route path={'/environments'} component={EnvironmentMain} />
    </Switch>
  );
};

export default EnvironmentPage;
