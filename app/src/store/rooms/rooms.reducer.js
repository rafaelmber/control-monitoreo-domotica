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
    case 'EDIT_ROOM': {
      const edited_room = action.payload;
      //let newRooms = state.filter((room) => {
      //  return room.id !== edited_room.id;
      //});
      //newRooms.push(edited_room);
      //return newRooms;
      const newState = state;
      const room_index = newState.findIndex((room) => {
        return room.id === edited_room.id;
      });
      newState[room_index] = edited_room;
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default rooms;
