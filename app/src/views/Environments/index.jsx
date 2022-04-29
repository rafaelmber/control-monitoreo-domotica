import React from 'react';
import { Routes, Route } from 'react-router-dom';

import EnvironmentMain from './EnvironmentMain/EnvironmentMain';
import InfoEnvironment from './InfoEnvironment/infoEnvironment';
import AddEnvironment from './AddEnvironment/AddEnvironment';
import EditEnvironment from './EditEnvironment/EditEnvironment';

const EnvironmentPage = () => {
  return (
    <Routes>
      <Route path={'add'} element={<AddEnvironment />} />
      <Route path={'edit/:id'} element={<EditEnvironment />} />
      <Route path={'info/:id'} element={<InfoEnvironment />} />
      <Route path={'/'} element={<EnvironmentMain />} />
    </Routes>
  );
};

export default EnvironmentPage;
