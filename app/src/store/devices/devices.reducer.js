import json2array from '@/utils/json2array';

const initialState = [];

const devices = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DEVICES': {
      let newState = json2array(action.payload);
      return newState;
    }
    case 'SET_DEVICE_STATUS': {
      const newState = [];
      for (let device of state) {
        if (device.id === action.payload.id) {
          device.status = action.payload.status;
        }
        newState.push(device);
      }
      return newState;
    }
    case 'TOGGLE_DEVICE_STATUS': {
      const newState = state.map((device) => {
        if (device.id === action.payload) {
          device.status = !device.status;
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
    case 'EDIT_DEVICE': {
      const editedDevice = action.payload;
      const newState = state.map((device) => {
        if (device.id === editedDevice.id) {
          device = editedDevice;
        }
        return device;
      });
      return newState;
    }
    case 'DELETE_DEVICE': {
      const newDevices = state.filter((device) => {
        return device.id !== action.payload;
      });
      return newDevices;
    }
    default:
      return state;
  }
};
export default devices;
