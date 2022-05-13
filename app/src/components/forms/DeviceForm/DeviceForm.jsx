import React from 'react';
import { useSelector } from 'react-redux';

import StyledDeviceForm from './DeviceForm.styles';
import TextField from '../TextField/TextField';
import SelectField from '../SelectField/SelectField';
import ContextButton from '@components/buttons/ContextButton/ContextButton';

import SaveIcon from '@assets/save.svg';

const DeviceForm = ({
  name,
  handleNameChange,
  handleSelectRoom,
  handleSelectType,
  handleSubmit,
}) => {
  const rooms = useSelector((state) => {
    return state.rooms;
  });
  const types = useSelector((state) => {
    return state.types;
  });
  return (
    <StyledDeviceForm>
      <TextField
        name='name'
        label='Name'
        value={name}
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
        <h5>Type</h5>
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
          onClick={handleSubmit}
        />
      </div>
    </StyledDeviceForm>
  );
};

export default DeviceForm;
