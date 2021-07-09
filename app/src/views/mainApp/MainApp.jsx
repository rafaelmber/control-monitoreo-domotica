import React from 'react';
import StyledMainApp from './MainApp.styles';
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Redirect,
} from 'react-router';
import RoomPage from '../rooms/RoomsPage/RoomPage';
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
        </Switch>
      </div>
      <NavBar className='footer' />
    </StyledMainApp>
  );
};
export default MainApp;
