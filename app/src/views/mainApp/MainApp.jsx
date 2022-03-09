//Dependencias
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';

//Recursos dentro del proyecto que se necesitan
import StyledMainApp from './MainApp.styles'; //Estilos de este componente
import db from '@/services/firebase'; //Conexión con la base de datos de Firebase
// Pagínas dentro de la ventana principal
import RoomMain from '@views/pages/Rooms/RoomMain/RoomMain';
import DevicesPage from '@views/pages/DevicesPage/DevicesPage';
import EnviromentsPage from '@views/pages/EnviromentsPage/EnviromentsPage';
//Barra de navegación
import NavBar from '@components/layout/navigation/NavBar/NavBar';

const MainApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //Tomar datos desde Firebase al iniciar el componente
    db.ref('/').once('value', (snapshot) => {
      //Se almacenan los dispositivos dentro del Store central de Redux
      dispatch({
        type: 'GET_DEVICES',
        payload: snapshot.val(),
      });
    });
    // Tomar los tipos de Firebase una sola vez
    db.ref('types/').once('value', (snapshot) => {
      //Almacenar los tipos en el store
      dispatch({
        type: 'GET_GROUPS',
        payload: snapshot.val(),
      });
    });
    db.ref('enviroments/').once('value', (snapshot) => {
      dispatch({
        type: 'GET_ENVIROMENTS',
        payload: snapshot.val(),
      });
    });
  }, [dispatch]);
  return (
    <StyledMainApp>
      <div className='content'>
        <Switch>
          {/*  Se definen las rutas de las diferentes pestañas que tiene la página principal

            Devices es donde se van a encontrar todos los dispositivos listados
            Enviroments es donde se van a encontrar botones para programar ambientes y ejecutarlos
            Sensors es la página donde se van a visualizar las mediciones de los sensores y la información correspondiente a ellos
            / o root es donde se encuntran los dispositivos clasificados por habitación

            Cada ruta tiene su Componente asociado, estos componentes se encuentran dentro de la carpeta Pages
          */}
          <Route exact path={'/devices'} component={DevicesPage} />
          <Route exact path={'/enviroments'} component={EnviromentsPage} />
          <Route exact path={'/rooms'} component={RoomMain} />
          <Route path={'/'}>
            <Redirect to={'rooms'} />
          </Route>
        </Switch>
      </div>
      <NavBar className='nav' />
    </StyledMainApp>
  );
};
export default MainApp;
