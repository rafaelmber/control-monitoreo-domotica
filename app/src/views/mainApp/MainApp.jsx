import React, { useEffect } from 'react';
import StyledMainApp from './MainApp.styles';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router';
import db from '@/services/firebase';

import RoomPage from '@views/pages/RoomsPage/RoomPage';
import DevicesPage from '@views/pages/DevicesPage/DevicesPage';
import NavBar from '@components/layout/navigation/NavBar/NavBar';
import EnviromentsPage from '../pages/EnviromentsPage/EnviromentsPage';
import SensorPage from '../pages/SensorPage/SensorPage';

const MainApp = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    db.ref('/').once('value', (snapshot) => {
      dispatch({
        type: 'GET_DEVICES',
        payload: snapshot.val(),
      });
    });
    db.ref('types/').once('value', (snapshot) => {
      dispatch({
        type: 'GET_GROUPS',
        payload: snapshot.val(),
      });
    });
  }, [dispatch]);
  return (
    <StyledMainApp>
      <div className='content'>
        <Switch>
          <Route exact path={'/devices'} component={DevicesPage} />
          <Route exact path={'/enviroments'} component={EnviromentsPage} />
          <Route exact path={'/sensors'} component={SensorPage} />
          <Route path={'/'} component={RoomPage} />
        </Switch>
      </div>
      <NavBar className='nav' />
    </StyledMainApp>
  );
};
export default MainApp;
