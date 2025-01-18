import React from 'react';

import './Loader.scss';

export const Loader: React.FC = () => {
   return (
      <div className='loader'>
         <div className='spinner' />
         <p className='loader-text'>Ищем котиков...</p>
      </div>
   );
};
