import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DevicesMain from './DevicesMain/DevicesMain';
import InfoDevice from './InfoDevice/infoDevice';
import AddDevice from './AddDevice/AddDevice';
import EditDevice from './EditDevice/EditDevice';

const DevicesPage = () => {
  return (
    <Switch>
      <Route exact path={'/devices/add'} component={AddDevice} />
      <Route exact path={'/devices/info/:id'} component={InfoDevice} />
      <Route exact path={'/devices/edit/:id'} component={EditDevice} />
      <Route path={'/devices'} component={DevicesMain} />
    </Switch>
  );
};

export default DevicesPage;
