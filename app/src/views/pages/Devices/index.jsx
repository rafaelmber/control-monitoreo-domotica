import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DevicesMain from './DevicesMain/DevicesMain';
import InfoDevice from './InfoDevice/infoDevice';

const DevicesPage = () => {
  return (
    <Switch>
      <Route exact path={'/devices/add'} />
      <Route exact path={'/devices/info/:id'} component={InfoDevice} />
      <Route exact path={'/devices/edit/:id'} />
      <Route path={'/devices'} component={DevicesMain} />
    </Switch>
  );
};

export default DevicesPage;
