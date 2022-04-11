import React from 'react';

import StyledEmailField from './EmailField.styles';

const EmailField = ({ name, label, value, placeholder, onChange }) => {
  return (
    <StyledEmailField>
      <label className='field-label' htmlFor='name'>
        {label}
      </label>
      <input
        type='email'
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className='field-input'
      />
    </StyledEmailField>
  );
};

export default EmailField;
