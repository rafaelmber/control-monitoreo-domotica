import React from 'react';
import StyledMainApp from './MainApp.styles';
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Redirect,
} from 'react-router';
import RoomPage from '@views/pages/RoomsPage/RoomPage';
import DevicesPage from '@views/pages/DevicesPage/DevicesPage';
import NavBar from '@components/layout/navigation/NavBar/NavBar';
import EnviromentsPage from '../pages/EnviromentsPage/EnviromentsPage';

const MainApp = ({ history }) => {
  let { path, url } = useRouteMatch();
  return (
    <StyledMainApp>
      <div className='content'>
        <Switch>
          <Route path={'/app/home'} component={RoomPage} />
          <Route path={'/app/devices'} component={DevicesPage} />
          <Route path={'/app/enviroments'} component={EnviromentsPage} />
        </Switch>
      </div>
      <NavBar className='nav' />
    </StyledMainApp>
  );
};
export default MainApp;
