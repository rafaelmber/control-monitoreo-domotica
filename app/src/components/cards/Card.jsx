import React from 'react';
import StyledCard from './Card.styles';
import Group from './group/Group';
import ActivateButton from '../buttons/ActivateButton/ActivateButton';
import data from '@/utils/data.json';
import json2array from '@/utils/json2array';

const Card = ({ name, devices }) => {
  const arr = [];
  for (const device of devices) {
    arr.push(device.type);
  }
  const types = new Set(arr);
  console.log(types);

  let typeArray = [];
  for (const type of types) {
    console.log(type);
    const devicesByTypes = devices.filter((el) => {
      return el.type === type;
    });
    typeArray.push({ type: type, devices: devicesByTypes });
  }
  console.log('Type array ', typeArray);

  return (
    <StyledCard>
      <div className='header'>
        <h3>{name}</h3>
        <ActivateButton isActive />
      </div>
      {typeArray.map((type) => {
        return <Group key={type.type} {...type} />;
      })}
    </StyledCard>
  );
};

export default Card;
