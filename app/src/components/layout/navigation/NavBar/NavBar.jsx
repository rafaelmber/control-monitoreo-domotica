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
      <NavBarItem isActive={true} route='/app/home'>
        <LampIcon className='icon' />
        <ChairIcon className='icon' />
      </NavBarItem>
      <NavBarItem isActive={false} route='/app/devices'>
        <BulbIcon className='icon' />
      </NavBarItem>
      <NavBarItem isActive={false} route='/app/enviroments'>
        <ProcessIcon className='icon' />
      </NavBarItem>
      <NavBarItem isActive={false} route='/app/sensors'>
        <SensorIcon className='icon' />
      </NavBarItem>
    </StyledNavBar>
  );
};

export default NavBar;
