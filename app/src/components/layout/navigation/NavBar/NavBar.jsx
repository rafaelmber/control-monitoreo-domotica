import React, { useState } from 'react';
import { StyledNavBar } from './NavBar.styles';
import NavBarItem from '../NavBarItem/NavBarItem';
import SensorIcon from '@assets/sensors.svg';
import BulbIcon from '@assets/bulb.svg';
import LampIcon from '@assets/lamp.svg';
import ChairIcon from '@assets/chair.svg';
import ProcessIcon from '@assets/process.svg';

const NavBar = () => {
  const [buttons, setButtons] = useState([
    {
      id: 0,
      status: 1,
      route: '/app/home',
      icons: [
        { id: 1, icon: LampIcon },
        { id: 2, icon: ChairIcon },
      ],
    },
    {
      id: 1,
      status: 0,
      route: '/app/devices',
      icons: [{ id: 1, icon: BulbIcon }],
    },
    {
      id: 2,
      status: 0,
      route: '/app/enviroments',
      icons: [{ id: 1, icon: ProcessIcon }],
    },
    {
      id: 3,
      status: 0,
      route: '/app/sensors',
      icons: [{ id: 1, icon: SensorIcon }],
    },
  ]);
  const handleClick = (buttonId) => {
    let newButtons = [];
    buttons.forEach((button) => {
      if (button.id === buttonId) {
        newButtons.push({ ...button, status: 1 });
      } else {
        newButtons.push({ ...button, status: 0 });
      }
    });
    setButtons(newButtons);
  };
  return (
    <StyledNavBar>
      {buttons.map((button) => {
        return (
          <NavBarItem key={button.id} button={button} onClick={handleClick} />
        );
      })}
    </StyledNavBar>
  );
};

export default NavBar;
