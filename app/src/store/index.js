import { combineReducers } from 'redux';

import devices from './devices/devices.reducer';
import rooms from './rooms/rooms.reducer';
import types from './types/types.reducer';
import environments from './environments/environments.reducer';

const combinedReducers = combineReducers({
  devices,
  rooms,
  types,
  environments,
});

export default combinedReducers;
