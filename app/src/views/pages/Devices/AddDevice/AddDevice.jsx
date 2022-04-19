import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import hashCreator from '@/utils/hashCreator';
import db from '@/services/firebase';

import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import DeviceForm from '@components/forms/DeviceForm/DeviceForm';

const AddDevice = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [type, setType] = useState('');

  const dispatch = useDispatch();
  const devices = useSelector((state) => {
    return state.devices;
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSelectRoom = (roomId) => {
    setRoom(roomId);
  };

  const handleSelectType = (typeId) => {
    setType(typeId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === '') {
      console.log('You must enter a name');
    } else if (room === '') {
      console.log('You must select a Room');
    } else if (type === '') {
      console.log('You must select a Type');
    } else {
      const deviceId = hashCreator('device', devices);
      const deviceRef = db.ref('systems/system_1/devices/' + deviceId);
      await deviceRef.set({
        name: name,
        type: type,
        room: room,
        status: false,
      });
      const deviceRefAtRoom = db.ref(
        'systems/system_1/rooms/' + room + '/devices/'
      );
      await deviceRefAtRoom.update({
        [deviceId]: true,
      });
      dispatch({
        type: 'ADD_DEVICE_IN_ROOM',
        payload: { roomId: room, device: deviceId },
      });
      dispatch({
        type: 'ADD_DEVICE',
        payload: {
          id: deviceId,
          name: name,
          type: type,
          room: room,
          status: false,
        },
      });
      console.log('New Device saved');
      navigate('/devices');
    }
  };

  return (
    <PageWrapper name='Devices' history={history}>
      <DeviceForm
        name={name}
        handleNameChange={handleNameChange}
        handleSelectRoom={handleSelectRoom}
        handleSelectType={handleSelectType}
        handleSubmit={handleSubmit}
      />
    </PageWrapper>
  );
};

export default AddDevice;
