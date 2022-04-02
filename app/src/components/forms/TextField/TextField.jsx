import React from 'react';
import StyledTextField from './TextField.styles';

const TextField = ({ value, onChange, name }) => {
  return (
    <StyledTextField>
      <label htmlFor={name} className='field-label'>
        Name
      </label>
      <input
        type='text'
        value={value}
        onChange={onChange}
        className='field-input'
        name={name}
      />
    </StyledTextField>
  );
};

export default TextField;
