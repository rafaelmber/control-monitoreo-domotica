const users = (state = { token: null }, action) => {
  switch (action.type) {
    case 'SET_TOKEN': {
      const token = action.payload;
      return { ...state, token: token };
    }
    case 'REMOVE_TOKEN': {
      return { ...state, token: null };
    }
    default: {
      return state;
    }
  }
};

export default users;
