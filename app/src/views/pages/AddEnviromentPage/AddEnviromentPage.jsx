import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StyledAddEnviromentPage from './AddEnviromentPage.styles';
import Wrapper from '@components/layout/wrapper/Wrapper';
const AddEnviromentPage = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <StyledAddEnviromentPage>
      <Wrapper>
        <div className='header'>
          <Link to='/enviroments' className='header__link'>
            {'⬅'}
          </Link>
          <h4 className='header__title'>Add Enviroment</h4>
          <input type='button' className='button' value={'✅'} />
        </div>
        <div className='content'>
          <div>
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
        </div>
      </Wrapper>
    </StyledAddEnviromentPage>
  );
};

export default AddEnviromentPage;
