import React from 'react';

import StyledSelectField from './SelectField.styles';

const SelectField = ({
  options,
  onChange,
  name,
  label,
  value,
  placeholder,
}) => {
  return (
    <StyledSelectField>
      <label htmlFor={name} className='select-label'>
        {label}
      </label>
      <select
        className='select-box'
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value='' disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </StyledSelectField>
  );
};

export default SelectField;
