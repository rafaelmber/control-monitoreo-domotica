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

    case 'ADD_DEVICE_IN_ROOM': {
      const roomId = action.payload.roomId;
      const newDevice = action.payload.device;

      const newState = [...state];

      for (const room of newState) {
        if (room.id === roomId) {
          room.devices.push({
            id: newDevice,
          });
        }
      }
      return newState;
    }
    case 'DELETE_DEVICE_IN_ROOM': {
      const roomId = action.payload.roomId;
      const deviceId = action.payload.deviceId;
      const newState = [...state];

      for (const room of newState) {
        if (room.id === roomId) {
          const newDevices = room.devices.filter((device) => {
            return device.id !== deviceId;
          });
          room.devices = newDevices;
        }
      }
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default rooms;
