import json2array from '@/utils/json2array';
const initialState = [];

const enviroments = (state = initialState, action) => {
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
    default: {
      return state;
    }
  }
};

export default enviroments;
