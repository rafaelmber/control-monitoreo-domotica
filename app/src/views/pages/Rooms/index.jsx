import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoomMain from './RoomMain/RoomMain';
import AddRoom from './AddRoom/AddRoom';
import InfoRoom from './InfoRoom/InfoRoom';
import EditRoom from './EditRoom/EditRoom';

const RoomPage = () => {
  return (
    <Routes>
      <Route path={`add`} element={<AddRoom />} />
      <Route path={`info/:id`} element={<InfoRoom />} />
      <Route path={`edit/:id`} element={<EditRoom />} />
      <Route path={`/`} element={<RoomMain />} />
    </Routes>
  );
};

export default RoomPage;
