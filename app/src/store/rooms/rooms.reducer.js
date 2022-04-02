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
    case 'ADD_ROOM': {
      const newRoom = action.payload;
      return [...state, newRoom];
    }
    case 'DELETE_ROOM': {
      const newState = state.filter((room) => {
        return room.id !== action.payload;
      });
      return newState;
    }
    case 'EDIT_ROOM': {
      const editedRoom = action.payload;
      const newState = state;
      const room_index = newState.findIndex((room) => {
        return room.id === editedRoom.id;
      });
      newState[room_index] = editedRoom;
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default rooms;
