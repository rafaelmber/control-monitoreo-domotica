import React, { useState } from 'react';

import StyledSelectField from './SelectField.styles';

const SelectField = ({ list, handleIdSelectItem, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(placeholder);

  const handleSelectItem = (id, name) => {
    handleIdSelectItem(id);
    setText(name);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledSelectField isOpen={isOpen}>
      <div onClick={handleClick} className='list-title'>
        {text}
      </div>
      <div className='list-items'>
        {list.map((item) => {
          return (
            <div
              key={item.id}
              className='item'
              onClick={() => {
                handleSelectItem(item.id, item.name);
                setIsOpen(false);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </StyledSelectField>
  );
};

export default SelectField;
