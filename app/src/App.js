/* This is the entry point of the application
This is where all parts of the app are connected
The store is initializated with Redux and also the Routing using React-Router

Este es el punto de entrada de la aplicación
es donde se conectan las demás partes de la aplicación
Se inicializa el store con Redux y se iniciaiza el ruteo usando React router
*/
//Se importan todas las dependencias necesarias para este archivo
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Se importan otros archivos dentro del proyecto para usarlos dentro de este

//Contiene los estilos globales de la aplicación
import GlobalStyle from './globalStyle';
//Contiene la pantalla principal
import MainApp from '@views/mainApp/MainApp';
//Contiene la pantalla de Login
import Login from '@views/login/Login';
//Es donde se define el store de Redux
import reducer from './store/';

//import SignUp from '@views/Signup/SignUp';

const store = createStore(reducer); // Se inicializa el store de Redux
const history = createBrowserHistory(); //Se usa el objeto que monitorea el historial dentro dela app

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        {/**
      <Route exact path='/signup' component={SignUp} />
       */}
        {
          // Carga el componente MainApp cuando se encuentre en la ruta /
        }
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <MainApp />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
