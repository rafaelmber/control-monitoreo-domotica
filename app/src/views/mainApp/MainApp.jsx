//Dependencias
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router';

//Recursos dentro del proyecto que se necesitan
import StyledMainApp from './MainApp.styles'; //Estilos de este componente
import { getOnce } from '@/services/firebase'; //Conexión con la base de datos de Firebase

// Pagínas dentro de la ventana principal
import RoomPage from '@views/pages/Rooms';
import DevicesPage from '../pages/Devices/';
import EnvironmentPage from '../pages/Environments';

const MainApp = () => {
  const dispatch = useDispatch();
  // const token = useSelector((state) => {
  //   return state?.users?.token;
  // });

  useEffect(() => {
    //Tomar datos desde Firebase al iniciar el componente y almacenarlo en el Store

    const elements = ['devices', 'rooms', 'types', 'environments'];
    for (const category of elements) {
      getOnce(category, dispatch);
    }
  }, [dispatch]);
  return (
    <StyledMainApp>
      <Routes>
        {/*  Se definen las rutas de las diferentes pestañas que tiene la página principal

            Devices es donde se van a encontrar todos los dispositivos listados

            Enviroments es donde se van a encontrar botones para programar ambientes y ejecutarlos

            Rooms es donde se van a encontar los dispositivos clasificados por habitación

            / o root es la ruta principal de la aplicación, automáticamente a partir de esta
            ruta se redirecionará 

            Cada ruta tiene su Componente asociado, estos componentes se encuentran dentro de la carpeta Pages
          */}
        <Route path={'devices/*'} element={<DevicesPage />} />
        <Route path={'environments/*'} element={<EnvironmentPage />} />
        <Route path={'rooms/*'} element={<RoomPage />} />
        <Route path={'*'} element={<Navigate to={'rooms'} />} />
      </Routes>
    </StyledMainApp>
  );
};
export default MainApp;
