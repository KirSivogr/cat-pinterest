import React from 'react';
import { NavLink } from 'react-router-dom';
import { BurgerMenu } from '@components/burger-menu/BurgerMenu';

import './Header.scss';

export const Header: React.FC = () => {
   return (
      <header className='header'>
         <nav className='nav'>
            <BurgerMenu />
            <NavLink
               to='/'
               className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
               Все котики
            </NavLink>
            <NavLink
               to='/favorites'
               className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
               Любимые котики
            </NavLink>
         </nav>
      </header>
   );
};
