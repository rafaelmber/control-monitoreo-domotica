import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EnvironmentMain from './EnvironmentMain/EnvironmentMain';

const EnvironmentPage = () => {
  return (
    <Switch>
      <Route exact path={'/enviroments/add'} />
      <Route exact path={'/enviroments/edit/:id'} />
      <Route exact path={'/enviroments/info/:id'} />
      <Route path={'/enviroments'} component={EnvironmentMain} />
    </Switch>
  );
};

export default EnvironmentPage;
