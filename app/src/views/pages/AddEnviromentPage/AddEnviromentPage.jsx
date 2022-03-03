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
import PlusIcon from '@assets/plus.svg';
import ArrowIcon from '@assets/arrow.svg';

import ContentWrapper from '@components/layout/wrapper/ContentWrapper/ContentWrapper';
import Item from '@components/cards/Item/Item';
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
  const handleDeviceStatus = (id, status) => {
    const newDevicesList = [...devicesList];
    newDevicesList.forEach((device) => {
      if (device.id === id) {
        device.status = !status;
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
          <ContentWrapper>
            <div className='insert_name'>
              <input
                type='text'
                name='title'
                value={title}
                onChange={handleChange}
                placeholder='Nombre del Ambiente'
                className='title'
              />
            </div>
            <div className='devices-list'>
              <div className='column-names'>
                <h4>Devices</h4>
                <h4>Status</h4>
              </div>
              {devicesList &&
                devicesList.map((device) => {
                  return (
                    <Item
                      key={device.id}
                      name={device.name}
                      id={device.id}
                      isActive={device.status}
                      isGroup={false}
                      Icon={ArrowIcon}
                      handleClick={() => {
                        handleDeviceStatus(device.id, device.status);
                      }}
                      className='device-item'
                    />
                  );
                })}

              <button onClick={handleModalClick} className='add-button'>
                <p>Add a new Enviroment</p>
                <PlusIcon className='plus-icon' />
              </button>
              <DevicesModal
                isOpen={isModalActive}
                closeModal={handleCloseModal}
                selectDevice={selectDevice}
              />
            </div>
            <div className='button-container'>
              <ContextButton
                text='Guardar'
                status
                Icon={SaveIcon}
                onClick={handleSubmit}
                className='save-button center'
              />
            </div>
          </ContentWrapper>
        </div>
      </Wrapper>
    </StyledAddEnviromentPage>
  );
};

export default AddEnviromentPage;
