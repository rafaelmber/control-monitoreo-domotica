import { combineReducers } from 'redux';
import devices from './devices/devices.reducer';
import rooms from './rooms/rooms.reducer';
import types from './types/types.reducer';
import environments from './environments/environments.reducer';
import users from './users/users.reducer';

export default combineReducers({
  devices,
  rooms,
  types,
  environments,
  users,
});
