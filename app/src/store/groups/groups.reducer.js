import json2array from '@/utils/json2array';

const groups = (state = [], action) => {
  switch (action.type) {
    case 'GET_GROUPS': {
      const groups = action.payload;
      const groupsArray = json2array(groups);
      return groupsArray;
    }
    default: {
      return state;
    }
  }
};

export default groups;
