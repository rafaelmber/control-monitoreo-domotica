const initialState = {
  1: {
    name: 'Luz',
    type: 'luminarias',
    status: 1,
  },
  2: {
    name: 'Televisor',
    type: 'tomacorrientes',
    status: 0,
  },
  3: {
    name: 'Entrada',
    type: 'luminarias',
    status: 1,
  },
  4: {
    name: 'Ventana',
    type: 'luminarias',
    status: 1,
  },
  5: {
    name: 'Equipo de sonido',
    type: 'tomacorrientes',
    status: 0,
  },
  6: {
    name: 'Ventilador',
    type: 'tomacorrientes',
    status: 1,
  },
};

const devices = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DEVICES':
      return state.devices;
    default:
      return { ...state };
  }
};
export default devices;
