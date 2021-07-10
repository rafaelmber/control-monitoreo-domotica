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
import Header from '@components/layout/header/Header';
import NavBar from '@components/layout/navigation/NavBar/NavBar';

const MainApp = ({ history }) => {
  let { path, url } = useRouteMatch();
  return (
    <StyledMainApp>
      <Header className='header' />
      <div className='content'>
        <Switch>
          <Route path={'/app/home'} component={RoomPage} />
          <Route path={'/app/devices'} component={DevicesPage} />
        </Switch>
      </div>
      <NavBar className='footer' />
    </StyledMainApp>
  );
};
export default MainApp;
