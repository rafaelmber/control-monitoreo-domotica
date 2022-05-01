import React from 'react';
import StyledModal from './Modal.styles';
import { createPortal } from 'react-dom';

const Modal = ({ children, isOpen }) => {
  if (isOpen) {
    return createPortal(
      <StyledModal>
        <div className='content'>{children}</div>
      </StyledModal>,
      document.getElementById('modal')
    );
  } else {
    return null;
  }
};

export default Modal;
