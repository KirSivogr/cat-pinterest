import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import './BurgerMenu.scss';

export const BurgerMenu = () => {
   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className='burger-menu'>
         <button className='burger-button' onClick={toggleMenu}>
            &#9776;
         </button>
         <nav className={`menu ${isOpen ? 'open' : ''}`}>
            {isOpen && (
               <button className='close-button' onClick={toggleMenu}>
                  &times;
               </button>
            )}
            <ul>
               <li>
                  <a onClick={() => navigate('/', { replace: false })}>Все котики</a>
               </li>
               <li>
                  <a onClick={() => navigate('/favorites', { replace: false })}>
                     Любимые котики
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   );
};
