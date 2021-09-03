import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import GlobalStyle from './globalStyle';
import MainApp from '@views/mainApp/MainApp';
import reducer from './store/rootReducer';
const store = createStore(reducer);
const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path='/login' />
          <Route path='/' component={MainApp} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
