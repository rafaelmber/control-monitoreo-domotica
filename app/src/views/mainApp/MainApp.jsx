//Dependencias
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

//Recursos que se necesitan dentro del proyecto
//Estilos de este componente
import StyledMainApp from './MainApp.styles';
//Conexión con la base de datos de Firebase
import { getAllDataOnce } from '@/services/firebase';
// Actions
import { setDevices } from '@/store/devices/devices.actions';
import { setRooms } from '@/store/rooms/rooms.actions';
import { setTypes } from '@/store/types/types.actions';
import { setEnvironments } from '@/store/environments/environments.actions';

// Pagínas dentro de la ventana principal
import RoomPage from '@views/Rooms';
import DevicesPage from '@views/Devices/';
import EnvironmentPage from '@views/Environments';

const MainApp = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    //Tomar datos desde Firebase al iniciar el componente y almacenarlo en el Store
    const systemData = await getAllDataOnce('system_1');
    //Solucionar cuando retorne null
    dispatch(setDevices(systemData.devices));
    dispatch(setRooms(systemData.rooms));
    dispatch(setTypes(systemData.types));
    dispatch(setEnvironments(systemData.environments));
  }, [dispatch]);
  return (
    <StyledMainApp>
      <Routes>
        <Route path={'devices/*'} element={<DevicesPage />} />
        <Route path={'environments/*'} element={<EnvironmentPage />} />
        <Route path={'rooms/*'} element={<RoomPage />} />
        <Route path={'*'} element={<Navigate to={'rooms'} />} />
      </Routes>
    </StyledMainApp>
  );
};
export default MainApp;

{
  /*  Se definen las rutas de las diferentes pestañas que tiene la página principal

    Devices es donde se van a encontrar todos los dispositivos listados

    Enviroments es donde se van a encontrar botones para programar ambientes y ejecutarlos

    Rooms es donde se van a encontar los dispositivos clasificados por habitación

    / o root es la ruta principal de la aplicación, automáticamente a partir de esta
    ruta se redirecionará 

    Cada ruta tiene su Componente asociado, estos componentes se encuentran dentro de la carpeta Pages
  */
}
