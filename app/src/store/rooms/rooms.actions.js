export const setRooms = (rooms) => {
  return {
    type: 'SET_ROOMS',
    payload: rooms,
  };
};

export const addRoom = (room) => {
  return {
    type: 'ADD_ROOM',
    payload: room,
  };
};

export const editRoom = (room) => {
  return {
    type: 'EDIT_ROOM',
    payload: room,
  };
};

export const deleteRoom = (roomId) => {
  return {
    type: 'DELETE_ROOM',
    payload: roomId,
  };
};
