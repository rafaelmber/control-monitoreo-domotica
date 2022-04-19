import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import db from '@/services/firebase';

import StyledEnvironmentForm from './EnvironmentForm.styles';
import TextField from '../TextField/TextField';
import ListDevices from '@components/layout/listItems/ListDevices/ListDevices';
import AddDeviceToEnv from '@components/layout/modal/AddDeviceToEnv/AddDeviceToEnv';
import ContextButton from '@components/buttons/ContextButton/ContextButton';

import DeleteIcon from '@assets/delete.svg';
import PlusIcon from '@assets/plus.svg';
import SaveIcon from '@assets/save.svg';

const EnvironmentForm = ({
  initialName,
  envId,
  envDevices,
  availableDevices,
  handleRemoveDevice,
  totalDevices,
  setAvailableDevices,
  setEnvDevices,
}) => {
  const navigate = useNavigate();
  const [name, setName] = useState(initialName);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddDevice = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectedDevice = (deviceId) => {
    const newEnvDevice = availableDevices.find((avDev) => {
      return avDev.id === deviceId;
    });
    let newEnvDevicesList = [...envDevices, newEnvDevice];
    const newAvailableDevices = availableDevices.filter((avDev) => {
      return avDev.id !== deviceId;
    });
    setAvailableDevices(newAvailableDevices);
    setEnvDevices(newEnvDevicesList);
    setIsModalOpen(false);
  };

  const handleStatusClick = (deviceId) => {
    const newEnvDevices = [];
    for (const device of envDevices) {
      if (device.id === deviceId) {
        const newDevice = { ...device, status: !device.status };
        newEnvDevices.push(newDevice);
      } else {
        newEnvDevices.push(device);
      }
    }
    setEnvDevices(newEnvDevices);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === '') {
      console.log('The Environment must have a name');
    } else if (envDevices.length === 0) {
      console.log('The Environment must have at least one device');
    } else {
      const newEnviroment = {
        id: envId,
        name: name,
        devices: envDevices,
      };
      const devicesObject = {};
      envDevices.forEach((device) => {
        devicesObject[device.id] = device.status;
      });
      const envRef = db.ref('systems/system_1/environments/' + envId);
      await envRef.set({
        name: name,
        devices: devicesObject,
      });
      dispatch({
        type: 'ADD_ENVIRONMENT',
        payload: newEnviroment,
      });
      navigate('/environments/info/' + envId);
    }
  };

  return (
    <StyledEnvironmentForm>
      <TextField
        value={name}
        onChange={handleNameChange}
        name='name'
        label='Name'
        placeholder='Enter Environment name'
      />
      <div>
        {envDevices.length === 0 && (
          <p className='message'>
            You have not added Devices in this Environment
          </p>
        )}
        {envDevices.length !== 0 && <h5>Devices</h5>}
        {envDevices.length !== 0 &&
          envDevices.map((envDev) => {
            return (
              <ListDevices
                key={envDev.id}
                name={envDev.name}
                type={envDev.type}
                status={envDev.status}
                handleStatusClick={() => {
                  handleStatusClick(envDev.id);
                }}
              >
                <ContextButton
                  textColor='var(--lightest-neutral)'
                  bgColor='var(--red)'
                  Icon={DeleteIcon}
                  onClick={() => {
                    handleRemoveDevice(envDev.id);
                  }}
                />
              </ListDevices>
            );
          })}
        {totalDevices !== envDevices.length && (
          <div className='devices-buttons'>
            <ContextButton
              text='Add a Device to the Environment'
              textColor='var(--lightest-neutral)'
              bgColor='var(--dark-primary)'
              Icon={PlusIcon}
              onClick={handleAddDevice}
            />
          </div>
        )}
      </div>
      <div className='save-button'>
        <ContextButton
          text='Save'
          textColor='var(--lightest-neutral)'
          bgColor='var(--green)'
          Icon={SaveIcon}
          onClick={handleSubmit}
        />
      </div>
      <AddDeviceToEnv
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        devices={availableDevices}
        handleClickDevice={handleSelectedDevice}
      />
    </StyledEnvironmentForm>
  );
};

export default EnvironmentForm;
