import json2array from '@/utils/json2array';
const initialState = [];

const environments = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ENVIRONMENTS': {
      if (state !== json2array(action.payload)) {
        let newState = { ...action.payload };

        for (const env in newState) {
          let envDevices = newState[env].devices;
          let newDevices = [];
          for (const device in envDevices) {
            newDevices.push({ id: device, status: envDevices[device] });
          }
          newState[env].devices = newDevices;
        }
        newState = json2array(newState);
        return newState;
      } else {
        return state;
      }
    }
    case 'ADD_ENVIRONMENT': {
      let newEnvironment = action.payload;
      newEnvironment.devices.forEach((device) => {
        device = { id: device.id, status: device.status };
      });
      const newState = [...state, newEnvironment];
      return newState;
    }
    case 'EDIT_ENVIRONMENT': {
      const editedEnvironment = action.payload;
      let newState = state.map((environment) => {
        if (environment.id === editedEnvironment.id) {
          environment = editedEnvironment;
        }
        return environment;
      });
      return newState;
    }
    case 'DELETE_ENVIRONMENT': {
      const newState = state.filter((env) => {
        return env.id !== action.payload;
      });
      return newState;
    }

    case 'DELETE_DEVICE_IN_ENVIRONMENTS': {
      const newState = [...state];
      newState.forEach((environment) => {
        delete environment.devices[action.payload];
      });
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default environments;
