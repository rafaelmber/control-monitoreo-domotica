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
      <Route exact path={`/rooms/add`}>
        <AddRoom />
      </Route>
      <Route exact path={`${path}/info/:id`}>
        <InfoRoom />
      </Route>
      <Route exact path={`${path}/edit/:id`}>
        <EditRoom />
      </Route>
      <Route path={`/rooms`}>
        <RoomMain />
      </Route>
    </Switch>
  );
};

export default RoomPage;
