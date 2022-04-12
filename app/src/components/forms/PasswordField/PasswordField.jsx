import React from 'react';

import TextField from '../TextField/TextField';

const PasswordField = ({ name, label, value, onChange, placeholder }) => {
  return (
    <TextField
      type='password'
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default PasswordField;
