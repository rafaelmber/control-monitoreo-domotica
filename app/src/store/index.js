import { combineReducers } from 'redux';

import devices from './devices/devices.reducer';
import rooms from './rooms/rooms.reducer';
import types from './types/types.reducer';
import environments from './environments/environments.reducer';
import rootReducer from './rootReducer';

const combinedReducers = combineReducers({
  devices,
  rooms,
  types,
  environments,
  root: rootReducer,
});

export default combinedReducers;
