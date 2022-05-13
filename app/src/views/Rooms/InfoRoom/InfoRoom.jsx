import React, { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { removeRoom } from '@/services/firebase';

import StyledInfoRoom from './InfoRoom.styles';
import PageWrapper from '@components/layout/wrapper/PageWrapper/PageWrapper';
import DevicesList from '@components/layout/DevicesList/DevicesList';

import ContextButton from '@components/buttons/ContextButton/ContextButton';
import DeleteIcon from '@assets/delete.svg';
import EditIcon from '@assets/edit.svg';
import PlusIcon from '@assets/plus.svg';
import DeleteModal from '@components/layout/modal/DeleteModal/DeleteModal';
import { deleteDeviceInRoom } from '@/store/rooms/rooms.actions';

const InfoRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = useSelector((state) => {
    const roomSelected = state.rooms.find((stateRoom) => {
      return stateRoom.id == id;
    });
    return roomSelected;
  });
  const devices = useSelector((state) => {
    const roomDevices = state.devices.filter((device) => {
      return device.room === id;
    });
    return roomDevices;
  });

  const handleAddDevice = () => {
    navigate('/devices/add');
  };
  const handleEditRoom = () => {
    navigate(`/rooms/edit/${id}`);
  };

  return (
    <PageWrapper name='Rooms'>
      <StyledInfoRoom>
        <h4 className='room__header'>{room?.name}</h4>
        <h5>Devices</h5>
        {devices?.length !== 0 && (
          <ul className='devices-list'>
            {devices.map((device) => {
              return (
                <DevicesList
                  key={device.id}
                  id={device.id}
                  name={device.name}
                  type={device.type}
                />
              );
            })}
          </ul>
        )}
        <ContextButton
          type='primary'
          text='Add a new Device'
          Icon={PlusIcon}
          onClick={handleAddDevice}
        />
        <div className='group-buttons'>
          <ContextButton
            type='secundary'
            text='Edit'
            Icon={EditIcon}
            onClick={handleEditRoom}
          />
          <ContextButton type='danger' text='Delete' Icon={DeleteIcon} />
        </div>
      </StyledInfoRoom>
    </PageWrapper>
  );
};
export default InfoRoom;

// const navigate = useNavigate();
// const [isModalOpen, setIsModalOpen] = useState(false);

// const { id } = useParams();

// const dispatch = useDispatch();
// const room = useSelector((state) => {
//   const roomSelected = state.rooms.find((room) => {
//     return room.id === id;
//   });
//   const devicesList = [];
//   roomSelected?.devices.forEach((device) => {
//     let selectedDevice = state.devices.find((deviceState) => {
//       return device.id === deviceState.id;
//     });
//     const newType = state.types.find((type) => {
//       return type.id === selectedDevice.type;
//     });
//     const newDevice = { ...selectedDevice, type: newType };
//     devicesList.push(newDevice);
//   });
//   const newRoomSelected = { ...roomSelected, devices: devicesList };
//   return newRoomSelected;
// });

// const handleDeviceClick = (deviceId) => {
//   navigate(`/devices/info/${deviceId}`);
// };
// const handleEdit = () => {
//   navigate(`/rooms/edit/${id}`);
// };
// const handleAddButton = () => {
//   navigate('/devices/add');
// };
// const handleDelete = async () => {
//   //Loading
//   await removeRoom(id);
//   for (const device in room.devices) {
//     dispatch({
//       type: 'DELETE_DEVICE_IN_ENVIRONMENTS',
//       payload: device,
//     });
//     dispatch(deleteDeviceInRoom(id, device));
//   }
//   dispatch(deleteRoom(id));
//   navigate('/rooms');
// };
// const handleModal = () => {
//   setIsModalOpen(true);
// };
// const closeModal = () => {
//   setIsModalOpen(false);
// };

// <DeleteModal
//   isOpen={isModalOpen}
//   closeModal={closeModal}
//   handleDelete={handleDelete}
//   message={`Al eliminar esta Habitación se eliminarán todos los dispositivos que
//     pertenecen a esta. ¿Desea continuar?`}
// />;

// {
//   /* {room !== undefined && (
//         <StyledInfoRoom>
//           <h4 className='room__name'>{room.name}</h4>
//           <h5>Devices</h5>
//           {room.devices.length !== 0 && (
//             <ul className='list'>
//               {room.devices.map((device) => {
//                 return (
//                   <ListDevices
//                     key={device.id}
//                     name={device.name}
//                     type={device.type}
//                     handleClick={() => handleDeviceClick(device.id)}
//                   />
//                 );
//               })}
//             </ul>
//           )}
//           <ContextButton
//             type='primary'
//             text='Add new Devices'
//             Icon={PlusIcon}
//             onClick={handleAddButton}
//           />
//           <div className='buttons-list'>
//             <ContextButton
//               type='secundary'
//               text='Edit'
//               Icon={EditIcon}
//               onClick={handleEdit}
//             />
//             <ContextButton
//               type='danger'
//               text='Delete'
//               Icon={DeleteIcon}
//               onClick={handleModal}
//             />
//           </div>
//         </StyledInfoRoom>
//       )} */
// }
