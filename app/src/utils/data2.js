const roomData = [
  {
    id: 1,
    name: 'Habitación',
    devices: [
      {
        id: 1,
        name: 'Luz',
        type: 'Luminarias',
        room: 'Habitación',
        status: 1,
      },
      {
        id: 2,
        name: 'Televisor',
        type: 'Tomacorrientes',
        room: 'Habitación',
        status: 0,
      },
    ],
  },
  {
    id: 2,
    name: 'Sala de estar',
    devices: [
      {
        id: 3,
        name: 'Entrada',
        type: 'Luminarias',
        room: 'Sala de estar',
        status: 1,
      },
      {
        id: 4,
        name: 'Ventana',
        type: 'Luminarias',
        room: 'Sala de estar',
        status: 1,
      },
      {
        id: 5,
        name: 'Equipo de sonido',
        type: 'Tomacorrientes',
        room: 'Sala de estar',
        status: 0,
      },
      {
        id: 6,
        name: 'Ventilador',
        type: 'Tomacorrientes',
        room: 'Sala de estar',
        status: 1,
      },
    ],
  },
];
export default roomData;
