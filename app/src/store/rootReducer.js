import { combineReducers } from 'redux';
import devices from './devices/devices.reducer';
import rooms from './rooms/rooms.reducer';
import groups from './groups/groups.reducer';

export default combineReducers({
  devices,
  rooms,
  groups,
});
