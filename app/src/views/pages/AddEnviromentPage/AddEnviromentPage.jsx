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
        <h2 className='header'>
          <Link to='/enviroments' className='header__link'>
            {'⬅Back'}
          </Link>
          <input type='button' value={'✅'} />
        </h2>
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
