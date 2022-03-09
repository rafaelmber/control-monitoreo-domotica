import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StyledEnviromentPage from './EnviromentPage.styles';

import EnviromentMain from '../EnviromentMain/EnviromentMain';

const EnviromentPage = () => {
  return (
    <StyledEnviromentPage>
      <Switch>
        <Route exact path={'/enviroments/add'} />
        <Route exact path={'/enviroments/edit/:id'} />
        <Route exact path={'/enviroments/info/:id'} />
        <Route path={'/enviroments'} component={EnviromentMain} />
      </Switch>
    </StyledEnviromentPage>
  );
};

export default EnviromentPage;
