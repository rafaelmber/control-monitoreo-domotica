import React from 'react';

import StyledPasswordField from './PasswordField.styles';

const PasswordField = ({ name, label, value, onChange, placeholder }) => {
  return (
    <StyledPasswordField>
      <label className='field-label' htmlFor={name}>
        {label}
      </label>
      <input
        type='password'
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='field-input'
      />
    </StyledPasswordField>
  );
};

export default PasswordField;
