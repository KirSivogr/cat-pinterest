import React from 'react';
import { BurgerMenu } from '@components/burger-menu/BurgerMenu';
import { FavoriteCats } from '@components/favorite-cats/FavoriteCats';

import { Header } from '@/components/header/Header';

export const FavoritesPage = () => {
   return (
      <>
         <Header />
         <FavoriteCats />
         <BurgerMenu />
      </>
   );
};
