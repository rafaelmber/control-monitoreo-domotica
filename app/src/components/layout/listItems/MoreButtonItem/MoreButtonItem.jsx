import React from 'react';
import StyledMoreButtonItem from './MoreButtonItem.styles';
import { Link } from 'react-router-dom';

const MoreButtonItem = ({ title, path, onClick }) => {
  return (
    <StyledMoreButtonItem onClick={onClick}>
      <Link to={`./${path}`} className='button_link'>
        <p>{`+ ${title}`}</p>
      </Link>
    </StyledMoreButtonItem>
  );
};

export default MoreButtonItem;
