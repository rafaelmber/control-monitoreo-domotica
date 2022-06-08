import json2array from '@/utils/json2array';

const rooms = (state = [], action) => {
  switch (action.type) {
    case 'SET_ROOMS': {
      const roomsJSON = action.payload;
      const roomsArray = json2array(roomsJSON);
      return roomsArray;
    }
    case 'ADD_ROOM': {
      const newRoom = action.payload;
      return [...state, newRoom];
    }
    case 'EDIT_ROOM': {
      const editedRoom = action.payload;
      const newState = state.map((room) => {
        if (room.id === editedRoom.id) {
          room = editedRoom;
        }
        return room;
      });
      return newState;
    }
    case 'DELETE_ROOM': {
      const newState = state.filter((room) => {
        return room.id !== action.payload;
      });
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default rooms;
