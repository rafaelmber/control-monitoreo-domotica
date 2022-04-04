import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import hashCreator from '@/utils/hashCreator';
import array2json from '@/utils/array2json';
import db from '@/services/firebase';

import StyledAddEnvironment from './AddEnvironment.styles';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import TextField from '@components/forms/TextField/TextField';
import ListDevices from '@components/layout/listItems/ListDevices/ListDevices';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import AddDeviceToEnv from '@components/layout/modal/AddDeviceToEnv/AddDeviceToEnv';

import SaveIcon from '@assets/save.svg';
import PlusIcon from '@assets/plus.svg';
import DeleteIcon from '@assets/delete.svg';

const AddEnvironment = ({ history }) => {
  const dispatch = useDispatch();
  const devicesList = useSelector((state) => {
    const devices = [...state.devices];
    devices.forEach((device) => {
      device.status = false;
    });
    return devices;
  });
  const environmentList = useSelector((state) => {
    return state.environments;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [envDevices, setEnvDevices] = useState([]);
  const [availableDevices, setAvailableDevies] = useState([...devicesList]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === '') {
      console.log('The Environment must have a name');
    } else if (envDevices.length === 0) {
      console.log('The Environment must have at least one device');
    } else {
      const envId = hashCreator(environmentList);
      const newEnviroment = {
        id: envId,
        name: name,
        devices: envDevices,
      };
      const devicesObject = {};
      envDevices.forEach((device) => {
        devicesObject[device.id] = device.status;
      });
      const envRef = db.ref('enviroments/' + envId);
      await envRef.set({
        name: name,
        devices: devicesObject,
      });
      dispatch({
        type: 'ADD_ENVIRONMENT',
        payload: newEnviroment,
      });
      history.push('/environments/info/' + envId);
      console.log('New Environment added!', name);
    }
  };

  const handleAddDevice = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleStatusClick = (deviceId) => {
    console.log('Changing status', deviceId, '...');

    const newEnvDevices = [];
    for (const device of envDevices) {
      if (device.id === deviceId) {
        const newDevice = { ...device, status: !device.status };
        newEnvDevices.push(newDevice);
      } else {
        newEnvDevices.push(device);
      }
    }
    console.log(newEnvDevices);
    setEnvDevices(newEnvDevices);
  };

  const handleRemoveDevice = (deviceId) => {
    const newAvailableDevice = envDevices.find((device) => {
      return device.id === deviceId;
    });
    newAvailableDevice.status = false;
    const newEnvDevices = envDevices.filter((device) => {
      return device.id !== deviceId;
    });

    let newAvailableDevicesList = [...availableDevices, newAvailableDevice];

    setAvailableDevies(newAvailableDevicesList);
    setEnvDevices(newEnvDevices);
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
    setAvailableDevies(newAvailableDevices);
    setEnvDevices(newEnvDevicesList);
    setIsModalOpen(false);
  };

  return (
    <StyledAddEnvironment>
      <PageWrapper name='Environments' history={history}>
        <form>
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
            {devicesList.length !== envDevices.length && (
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
        </form>
        <AddDeviceToEnv
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          devices={availableDevices}
          handleClickDevice={handleSelectedDevice}
        />
      </PageWrapper>
    </StyledAddEnvironment>
  );
};

export default AddEnvironment;
