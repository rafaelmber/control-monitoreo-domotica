import React from 'react';
import { Link } from 'react-router-dom';

import StyledAddDevicePage from './AddDevicePage.styles';

const AddDevicePage = () => {
  return (
    <StyledAddDevicePage>
      <h2 className='header'>
        <Link to='/' className='header__link'>
          {'Back'}
        </Link>
      </h2>
    </StyledAddDevicePage>
  );
};

export default AddDevicePage;
