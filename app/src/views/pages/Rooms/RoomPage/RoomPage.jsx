import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import StyledRoomPage from './RoomPage.styles';
import RoomMain from '../RoomMain/RoomMain';
import InfoRoom from '../InfoRoom/InfoRoom';

const RoomPage = () => {
  let { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <StyledRoomPage>
      <Switch>
        <Route exact path={`/rooms/add`}>
          <h1>Holaaaa</h1>
        </Route>
        <Route exact path={`${path}/info/:id`} component={InfoRoom} />
        <Route exact path={`${path}/edit/:id`} />
        <Route path={`/rooms`} component={RoomMain} />
      </Switch>
    </StyledRoomPage>
  );
};

export default RoomPage;
