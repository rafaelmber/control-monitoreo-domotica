import React from 'react';
import { Link } from 'react-router-dom';
import StyledAddEnviromentPage from './AddEnviromentPage.styles';

const AddEnviromentPage = () => {
  return (
    <StyledAddEnviromentPage>
      <Link to='/enviroments'>Back</Link>
    </StyledAddEnviromentPage>
  );
};

export default AddEnviromentPage;
