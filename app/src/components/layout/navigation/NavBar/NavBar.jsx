import React from 'react';
import { StyledNavBar } from './NavBar.styles';
import NavBarItem from '../NavBarItem/NavBarItem';
import BulbIcon from '@assets/bulb.svg';
import LampIcon from '@assets/lamp.svg';
import ChairIcon from '@assets/chair.svg';
import ProcessIcon from '@assets/process.svg';

const buttons = [
  {
    id: 0,
    route: '/',
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
    route: '/enviroments',
    icons: [{ id: 1, icon: ProcessIcon }],
  },
];

const NavBar = () => {
  return (
    <StyledNavBar>
      {buttons.map((button) => {
        return <NavBarItem key={button.id} button={button} />;
      })}
    </StyledNavBar>
  );
};

export default NavBar;
