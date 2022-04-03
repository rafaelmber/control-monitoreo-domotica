import json2array from '@/utils/json2array';
const initialState = [];

const environments = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ENVIROMENTS': {
      if (state !== json2array(action.payload)) {
        let newState = action.payload;
        newState = json2array(newState);
        return newState;
      } else {
        return state;
      }
    }
    case 'ADD_ENVIRONMENT': {
      const newEnvironment = action.payload;
      const newState = [...state, newEnvironment];
      return newState;
    }
    case 'EDIT_ENVIRONMENT': {
      const editedEnvironment = action.payload;
      let newState = [...state];
      const environmentIndex = newState.findIndex((env) => {
        return env.id === editedEnvironment.id;
      });
      newState[environmentIndex] = editedEnvironment;
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
