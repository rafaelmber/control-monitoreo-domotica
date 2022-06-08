import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    if (deviceData !== undefined) {
      setDevice(deviceData);
    }
  }, [deviceData]);

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
    } else if (device.room === '') {
      console.log('El dispositivo debe pertenecer a una habitación');
    } else if (device.type === '') {
      console.log('El dispositivo debe tener un tipo');
    } else {
      sendData(device);
    }
  };

  const handleChange = (event) => {
    setDevice({ ...device, [event.target.name]: event.target.value });
  };

  return (
    <StyledDeviceForm>
      <TextField
        name='name'
        label='Name'
        value={device.name}
        onChange={handleChange}
        placeholder='Enter Device Name'
      />
      <div className='select-field'>
        <SelectField
          options={rooms}
          onChange={handleChange}
          name='room'
          label='Room'
          placeholder='Select a Room'
          value={device.room}
          className='select-box'
        />
      </div>
      <div className='select-field'>
        <SelectField
          options={types}
          onChange={handleChange}
          name='type'
          label='Type'
          value={device.type}
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
