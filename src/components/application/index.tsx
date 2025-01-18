import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FavoritesPage } from '@/components/pages/FavoritesPage';
import { HomePage } from '@/components/pages/HomePage';

export const App = () => {
   return (
      <BrowserRouter>
         <main>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/favorites' element={<FavoritesPage />} />
            </Routes>
         </main>
      </BrowserRouter>
   );
};
