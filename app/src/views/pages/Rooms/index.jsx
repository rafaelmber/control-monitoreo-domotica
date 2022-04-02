import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import RoomMain from './RoomMain/RoomMain';
import AddRoom from './AddRoom/AddRoom';
import InfoRoom from './InfoRoom/InfoRoom';
import EditRoom from './EditRoom/EditRoom';

const RoomPage = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`/rooms/add`} component={AddRoom} />
      <Route exact path={`${path}/info/:id`} component={InfoRoom} />
      <Route exact path={`${path}/edit/:id`} component={EditRoom} />
      <Route path={`/rooms`} component={RoomMain} />
    </Switch>
  );
};

export default RoomPage;
