import React from 'react';
import StyledMoreButtonItem from './MoreButtonItem.styles';
import { Link } from 'react-router-dom';
import PlusIcon from '@assets/plus.svg';
const MoreButtonItem = ({ title, path, onClick }) => {
  return (
    <StyledMoreButtonItem onClick={onClick}>
      <Link to={`./${path}`} className='link'>
        <p>{title}</p> <PlusIcon />
      </Link>
    </StyledMoreButtonItem>
  );
};

export default MoreButtonItem;
