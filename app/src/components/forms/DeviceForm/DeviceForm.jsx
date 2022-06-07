import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import StyledDeviceForm from './DeviceForm.styles';
import TextField from '../TextField/TextField';
import SelectField from '../SelectField/SelectField';
import ContextButton from '@components/buttons/ContextButton/ContextButton';

import SaveIcon from '@assets/save.svg';

const DeviceForm = ({ deviceData, sendData }) => {
  const [device, setDevice] = useState(
    deviceData || {
      name: '',
      room: '',
      type: '',
      status: false,
    }
  );

  const rooms = useSelector((state) => {
    return state.rooms;
  });
  const types = useSelector((state) => {
    return state.types;
  });
  const handleClick = (event) => {
    event.preventDefault();
    if (device.name === '') {
      console.log('El dispositivo debe tener un nombre');
    } else if (device.type === '') {
      console.log('El dispositivo debe tener un tipo');
    } else if (device.room === '') {
      console.log('El dispositivo debe pertenecer a una habitación');
    } else {
      sendData(device);
    }
  };

  const handleNameChange = (event) => {
    setDevice({ ...device, name: event.target.value });
  };
  const handleSelectRoom = (roomId) => {
    setDevice({ ...device, room: roomId });
  };
  const handleSelectType = (typeId) => {
    setDevice({ ...device, type: typeId });
  };

  return (
    <StyledDeviceForm>
      <TextField
        name='name'
        label='Name'
        value={device.name}
        onChange={handleNameChange}
        placeholder='Enter Device Name'
      />
      <div className='select-field'>
        <h5 className='select-label'>Room</h5>
        <SelectField
          list={rooms}
          handleIdSelectItem={handleSelectRoom}
          placeholder='Select a Room'
          className='select-box'
        />
      </div>
      <div className='select-field'>
        <h5 className='select-label'>Type</h5>
        <SelectField
          list={types}
          handleIdSelectItem={handleSelectType}
          className='select-field'
          placeholder='Select a Type'
        />
      </div>
      <div className='save-button'>
        <ContextButton
          text='Save'
          type='success'
          Icon={SaveIcon}
          onClick={handleClick}
        />
      </div>
    </StyledDeviceForm>
  );
};

export default DeviceForm;
