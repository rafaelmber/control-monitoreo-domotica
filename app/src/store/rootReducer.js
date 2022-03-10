import { combineReducers } from 'redux';
import devices from './devices/devices.reducer';
import rooms from './rooms/rooms.reducer';
import types from './types/types.reducer';
import enviroments from './enviroments/enviroments.reducer';

export default combineReducers({
  devices,
  rooms,
  types,
  enviroments,
});
