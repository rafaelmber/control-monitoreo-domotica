import React from 'react';
import GlobalStyle from './globalStyle';
import NavBar from './components/layout/navigation/NavBar/NavBar';
//import {createStore} from 'redux'
//import {Provider} from 'react-redux'
//import {BrowserRouter,Route,Switch} from 'react-router-dom';
import MainApp from './views/mainApp/MainApp';
//const store = createStore()

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainApp />
    </>
  );
};
export default App;
