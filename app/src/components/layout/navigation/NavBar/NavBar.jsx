import React from 'react';
import { StyledNavBar } from './NavBar.styles';
//import {Link} from 'react-router-dom'
import NavBarItem from '../NavBarItem/NavBarItem';
import SensorIcon from '@assets/sensors.svg';
import BulbIcon from '@assets/bulb.svg';
import LampIcon from '@assets/lamp.svg';
import ChairIcon from '@assets/chair.svg';
import ProcessIcon from '@assets/process.svg';

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavBarItem isActive={true}>
        <LampIcon className='icon' />
        <ChairIcon className='icon' />
        <div className='container'></div>
      </NavBarItem>
      <NavBarItem isActive={false}>
        <BulbIcon className='icon' />
      </NavBarItem>
      <NavBarItem isActive={false}>
        <ProcessIcon className='icon' />
      </NavBarItem>
      <NavBarItem isActive={false}>
        <SensorIcon className='icon' />
      </NavBarItem>
    </StyledNavBar>
  );
};

export default NavBar;
