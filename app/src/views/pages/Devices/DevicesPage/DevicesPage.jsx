import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StyledDevicesPage from './DevicesPage.styles';
import DevicesMain from '../DevicesMain/DevicesMain';

const DevicesPage = () => {
  return (
    <StyledDevicesPage>
      <Switch>
        <Route exact path={'/devices/add'} />
        <Route exact path={'/devices/info/:id'} />
        <Route exact path={'/devices/edit/:id'} />
        <Route path={'/devices'} component={DevicesMain} />
      </Switch>
    </StyledDevicesPage>
  );
};

export default DevicesPage;
