import React from 'react';
import { StyledNavBar } from './NavBar.styles';
import NavBarItem from '../NavBarItem/NavBarItem';
import BulbIcon from '@assets/bulb.svg';
import LampIcon from '@assets/lamp.svg';
import ChairIcon from '@assets/chair.svg';
import ProcessIcon from '@assets/process.svg';

const NavBar = () => {
  const buttons = [
    {
      id: 0,
      route: '/rooms',
      icons: [
        { id: 1, icon: LampIcon },
        { id: 2, icon: ChairIcon },
      ],
    },
    {
      id: 1,
      route: '/devices',
      icons: [{ id: 1, icon: BulbIcon }],
    },

    {
      id: 2,
      route: '/environments',
      icons: [{ id: 1, icon: ProcessIcon }],
    },
  ];
  return (
    <StyledNavBar>
      {buttons.map((button) => {
        return <NavBarItem key={button.id} button={button} />;
      })}
    </StyledNavBar>
  );
};

export default NavBar;
