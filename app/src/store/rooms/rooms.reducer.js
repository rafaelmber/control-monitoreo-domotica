import json2array from '@/utils/json2array';

const rooms = (state = [], action) => {
  switch (action.type) {
    case 'GET_ROOMS': {
      const roomsJSON = action.payload;
      for (const room in roomsJSON) {
        const devices = json2array(roomsJSON[room].devices);
        roomsJSON[room].devices = devices;
      }
      const roomsArray = json2array(roomsJSON);
      return roomsArray;
    }
    default: {
      return state;
    }
  }
};

export default rooms;
