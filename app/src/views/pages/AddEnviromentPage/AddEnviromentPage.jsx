import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StyledAddEnviromentPage from './AddEnviromentPage.styles';
import Wrapper from '@components/layout/wrapper/Wrapper';
import DevicesModal from '@components/layout/modal/DevicesModal/DevicesModal';
import db from '@/services/firebase';
import hashCreator from '@/utils/hashCreator';

import HeaderBackButton from '@components/layout/HeaderBackButton/HeaderBackButton';
import ContextButton from '@components/buttons/ContextButton/ContextButton';
import SaveIcon from '@assets/save.svg';
const AddEnviromentPage = ({ history }) => {
  const [title, setTitle] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);
  const [devicesList, setDevicesList] = useState([]);

  const enviromentList = useSelector((state) => {
    return state.enviroments;
  });

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleModalClick = () => {
    setIsModalActive(true);
  };
  const handleCloseModal = () => {
    setIsModalActive(false);
  };
  const selectDevice = (device) => {
    if (
      devicesList.some((dev) => {
        return dev.id === device.id;
      })
    ) {
      alert('Solo se puede seleccionar un dispositivo una sola vez');
    } else {
      const newDevice = { ...device, status: false };
      setDevicesList([...devicesList, newDevice]);
      setIsModalActive(false);
    }
  };
  const handleSetDeviceStatus = (e) => {
    const newDevicesList = [...devicesList];
    newDevicesList.forEach((device) => {
      if (device.id === e.target.name) {
        device.status = e.target.checked;
      }
    });
    setDevicesList(newDevicesList);
  };
  const handleSubmit = async () => {
    if (title.length === 0) {
      alert('Debe tener un nombre');
    } else if (devicesList.length === 0) {
      alert('Debe seleccionar al menos un dispositivo');
    } else {
      const newDevicesJSON = {};
      devicesList.forEach((device) => {
        newDevicesJSON[device.id] = device.status;
      });
      const hash = hashCreator(enviromentList);
      const envDB = db.ref('/enviroments/' + hash);
      await envDB.set({ name: title, devices: newDevicesJSON });
      alert('Ambiente creado correctamente');
      history.push('/enviroments');
    }
  };
  const handleBack = () => {
    history.goBack();
  };

  return (
    <StyledAddEnviromentPage>
      <Wrapper>
        <HeaderBackButton
          text='Add Enviroment'
          handleClick={handleBack}
          options={[]}
        />
        <div className='content'>
          <div className='insert__title'>
            <label className='label' htmlFor='title'>
              Título
            </label>
            <input
              className='input'
              type='text'
              name='title'
              value={title}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='button'
              value='+ Add a Device'
              onClick={handleModalClick}
            />
            <DevicesModal
              isOpen={isModalActive}
              closeModal={handleCloseModal}
              selectDevice={selectDevice}
            />
            <ul>
              {devicesList &&
                devicesList.map((device) => {
                  return (
                    <li key={device.id}>
                      {device.name}
                      <input
                        type='checkbox'
                        name={device.id}
                        checked={device.status}
                        onChange={handleSetDeviceStatus}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
          <ContextButton
            text='Guardar'
            status
            Icon={SaveIcon}
            onClick={handleSubmit}
          />
        </div>
      </Wrapper>
    </StyledAddEnviromentPage>
  );
};

export default AddEnviromentPage;
