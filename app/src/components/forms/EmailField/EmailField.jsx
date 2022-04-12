import React from 'react';

import TextField from '../TextField/TextField';

const EmailField = ({ name, label, value, placeholder, onChange }) => {
  return (
    <TextField
      type='email'
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      label={label}
    />
  );
};

export default EmailField;
