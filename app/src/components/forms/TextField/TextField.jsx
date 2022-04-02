import React from 'react';
import StyledTextField from './TextField.styles';

const TextField = ({ value, onChange, name, placeholder, label }) => {
  return (
    <StyledTextField>
      <label htmlFor={name} className='field-label'>
        {label}
      </label>
      <input
        type='text'
        value={value}
        onChange={onChange}
        className='field-input'
        name={name}
        placeholder={placeholder}
      />
    </StyledTextField>
  );
};

export default TextField;
