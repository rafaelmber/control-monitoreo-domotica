import json2array from '@/utils/json2array';

const types = (state = [], action) => {
  switch (action.type) {
    case 'GET_TYPES': {
      const types = action.payload;
      const typesArray = json2array(types);
      return typesArray;
    }
    default: {
      return state;
    }
  }
};

export default types;
