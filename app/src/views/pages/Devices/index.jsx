import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DevicesMain from './DevicesMain/DevicesMain';
import InfoDevice from './InfoDevice/infoDevice';
import AddDevice from './AddDevice/AddDevice';
import EditDevice from './EditDevice/EditDevice';

const DevicesPage = () => {
  return (
    <Switch>
      <Route exact path={'/devices/add'}>
        <AddDevice />
      </Route>
      <Route exact path={'/devices/info/:id'}>
        <InfoDevice />
      </Route>
      <Route exact path={'/devices/edit/:id'}>
        <EditDevice />
      </Route>
      <Route path={'/devices'}>
        <DevicesMain />
      </Route>
    </Switch>
  );
};

export default DevicesPage;
