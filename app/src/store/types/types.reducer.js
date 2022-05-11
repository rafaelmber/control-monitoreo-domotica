import json2array from '@/utils/json2array';

const types = (state = [], action) => {
  switch (action.type) {
    case 'SET_TYPES': {
      const types = action.payload;
      const typesArray = json2array(types);
      console.log('Types in Redux', typesArray);
      return typesArray;
    }
    default: {
      return state;
    }
  }
};

export default types;
