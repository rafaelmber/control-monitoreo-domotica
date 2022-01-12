import React from 'react';
import { Link } from 'react-router-dom';

import StyledAddDevicePage from './AddDevicePage.styles';

const AddDevicePage = () => {
  return (
    <StyledAddDevicePage>
      <Link to='/'>Back</Link>
    </StyledAddDevicePage>
  );
};

export default AddDevicePage;
