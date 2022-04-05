import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import db from '@/services/firebase';

import StyledInfoDevice from './InfoDevice.styles';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import ActivateButton from '@components/buttons/ActivateButton/ActivateButton';

const InfoDevice = ({ history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const device = useSelector((state) => {
    return state.devices.find((stateDevice) => {
      return stateDevice.id === id;
    });
  });

  const room = useSelector((state) => {
    return state.rooms.find((room) => {
      return room.id === device.room;
    });
  });

  const type = useSelector((state) => {
    return state.types.find((type) => {
      return type.id === device.type;
    });
  });

  const [, setButtonStatus] = useState(device.status);
  const handleStatusClick = async () => {
    const deviceRef = db.ref('devices/' + id);
    await deviceRef.update({ status: !device.status });
    dispatch({
      type: 'SET_DEVICE_STATUS',
      payload: id,
    });
    setButtonStatus(!device.status);
  };

  return (
    <StyledInfoDevice>
      <PageWrapper name='Devices' history={history}>
        <h4>{device.name}</h4>
        <div className='field'>
          <span className='field-property'>Room:</span>
          <span className='field-value'>{room.name}</span>
        </div>
        <div className='field'>
          <span className='field-property'>Type:</span>
          <span className='field-value'>{type.name}</span>
        </div>
        <div className='field'>
          <span className='field-property'>Status:</span>
          <span className='field-value'>
            <ActivateButton
              isActive={device.status}
              onClick={handleStatusClick}
            />
          </span>
        </div>
      </PageWrapper>
    </StyledInfoDevice>
  );
};

export default InfoDevice;
