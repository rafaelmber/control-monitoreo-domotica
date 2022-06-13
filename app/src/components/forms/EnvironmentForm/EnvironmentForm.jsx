import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import StyledEnvironmentForm from './EnvironmentForm.styles';
import TextField from '../TextField/TextField';
import DevicesList from '../../layout/DevicesList/DevicesList';

import ContextButton from '@components/buttons/ContextButton/ContextButton';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

import DeleteIcon from '@assets/delete.svg';
import SaveIcon from '@assets/save.svg';
import SelectDevices from '../SelectDevices/SelectDevices';

const EnvironmentForm = ({ environmentData, sendData }) => {
  const [environment, setEnvironment] = useState(
    environmentData || {
      name: '',
      devices: [],
    }
  );
  const [availableDevices, setAvailableDevices] = useState([]);

  const currentDevices = useSelector((state) => {
    const selectedDevices = state.devices.map((device) => {
      const room = state.rooms.find((roomState) => {
        return roomState.id === device.room;
      });
      const newDevice = { ...device, room: room?.name };
      return newDevice;
    });
    return selectedDevices || [];
  });

  useEffect(() => {
    if (environmentData !== undefined) {
      setEnvironment(environmentData);
    }
  }, [environmentData]);

  useEffect(() => {
    compareDevicesLists();
  }, [environment]);

  const compareDevicesLists = () => {
    if (environment.devices !== undefined) {
      let devicesList = currentDevices.filter((device) => {
        return !environment.devices.some((deviceEnv) => {
          return deviceEnv.id === device.id;
        });
      });
      setAvailableDevices(devicesList);
    }
  };
  const handleChangeName = (event) => {
    setEnvironment({ ...environment, name: event.target.value });
  };

  const handleAddDevice = (deviceId) => {
    const newDevice = currentDevices.find((device) => {
      return device.id === deviceId;
    });
    newDevice.status = false;
    const newListDevices = [...environment.devices, newDevice];
    setEnvironment({ ...environment, devices: newListDevices });
  };

  const handleStatusClick = (deviceId) => {
    const newDevicesList = environment.devices.map((device) => {
      if (device.id === deviceId) {
        device.status = !device.status;
      }
      return device;
    });
    setEnvironment({ ...environment, devices: newDevicesList });
  };

  const handleDeleteDevice = (deviceId) => {
    const newDevicesList = environment.devices.filter((device) => {
      return device.id !== deviceId;
    });
    setEnvironment({ ...environment, devices: newDevicesList });
  };

  const handleSave = async (event) => {
    event.preventDefault();
    if (environment.name.length === 0) {
      console.log('The environment must have a name');
    } else if (environment.devices.length === 0) {
      console.log('The environment must have at least one device');
    } else {
      await sendData(environment);
    }
  };
  return (
    <StyledEnvironmentForm>
      {environment.name !== undefined && (
        <TextField
          type='text'
          value={environment.name}
          name='name'
          label='Name'
          placeholder='Enter the Environment name'
          onChange={handleChangeName}
        />
      )}
      {environment?.devices?.length === 0 && (
        <p>You do not have Devices in this environment</p>
      )}
      {environment?.devices?.length !== 0 &&
        environment?.devices?.map((device) => {
          return (
            <DevicesList
              key={device.id}
              name={device.name}
              type={device.type}
              room={device.room}
            >
              <ActivateButton
                isActive={device.status}
                onClick={() => {
                  handleStatusClick(device.id);
                }}
              />
              <ContextButton
                type='danger'
                Icon={DeleteIcon}
                onClick={() => {
                  handleDeleteDevice(device.id);
                }}
              />
            </DevicesList>
          );
        })}
      <SelectDevices
        devices={availableDevices}
        selectDevice={handleAddDevice}
      />
      <div className='buttons'>
        <ContextButton
          type='success'
          text='Save'
          Icon={SaveIcon}
          onClick={handleSave}
        />
      </div>
    </StyledEnvironmentForm>
  );
};

export default EnvironmentForm;
