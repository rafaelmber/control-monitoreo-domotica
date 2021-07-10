import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
      <BrowserRouter history={history}>
        <Switch>
          <Route path='/login' />
          <Route path='/app' component={MainApp} />
          <Route path='/'>
            <Redirect to='/app/home' />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
