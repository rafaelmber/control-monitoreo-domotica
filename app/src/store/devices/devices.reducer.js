import json2array from '@/utils/json2array';
const initialState = [];

const devices = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DEVICES': {
      let newState = json2array(action.payload);
      return newState;
    }
    case 'GET_DEVICE_STATUS': {
      const newState = [];
      for (let device of state) {
        if (device.id === action.payload.id) {
          device.status = action.payload.status;
        }
        newState.push(device);
      }
      return newState;
    }
    case 'SET_DEVICE_STATUS': {
      const newState = [];
      for (let device of state) {
        if (device.id === action.payload) {
          device.status = !device.status;
        }
        newState.push(device);
      }
      return newState;
    }
    default:
      return state;
  }
};
export default devices;
