import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.module.scss';

export const Header: React.FC = () => {
   return (
      <header className='header'>
         <nav className='nav'>
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
