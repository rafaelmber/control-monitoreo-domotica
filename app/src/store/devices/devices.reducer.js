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
      const newState = [...state];
      newState.forEach((device) => {
        if (device.id === action.payload) {
          console.log('is this working?');
          const newDevice = { ...device, status: !device.status };
          return newDevice;
        }
        return device;
      });
      return newState;
    }
    case 'ADD_DEVICE': {
      const newDevice = action.payload;
      const newState = [...state, newDevice];
      return newState;
    }
    default:
      return state;
  }
};
export default devices;
