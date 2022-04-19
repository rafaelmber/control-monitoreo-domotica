import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DevicesMain from './DevicesMain/DevicesMain';
import InfoDevice from './InfoDevice/infoDevice';
import AddDevice from './AddDevice/AddDevice';
import EditDevice from './EditDevice/EditDevice';

const DevicesPage = () => {
  return (
    <Routes>
      <Route path={'add'} element={<AddDevice />} />
      <Route path={'info/:id'} element={<InfoDevice />} />
      <Route path={'edit/:id'} element={<EditDevice />} />
      <Route path={'/'} element={<DevicesMain />} />
    </Routes>
  );
};

export default DevicesPage;
