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
      <Route exact path={'/environments/add'}>
        <AddEnvironment />
      </Route>
      <Route exact path={'/environments/edit/:id'}>
        <EditEnvironment />
      </Route>
      <Route exact path={'/environments/info/:id'}>
        <InfoEnvironment />
      </Route>
      <Route path={'/environments'}>
        <EnvironmentMain />
      </Route>
    </Switch>
  );
};

export default EnvironmentPage;
