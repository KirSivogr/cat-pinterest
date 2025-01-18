import React from 'react';

import { HeartIcon } from '@/components/heart-icon/HeartIcon';
import { BREAKPOINT_COLS } from '@/constants/constants';
import { IFilteredCat } from '@/types/interface';

import './MasonryGrid.module.scss';
import Masonry from 'react-masonry-css';

type MasonryGridProps = {
   catsList: IFilteredCat[];
   favoritesItems: IFilteredCat[];
   handleClickFavorite: (id: string, url: string) => void;
};

export const MasonryGrid: React.FC<MasonryGridProps> = ({
   catsList,
   favoritesItems,
   handleClickFavorite,
}) => {
   return (
      <Masonry breakpointCols={BREAKPOINT_COLS} className='masonry-grid'>
         {catsList.map(cat => (
            <div key={cat.id} className='cat-item'>
               <img src={cat.url} alt={`cat-${cat.id}`} />
               <HeartIcon
                  id={cat.id}
                  url={cat.url}
                  favoritesItems={favoritesItems}
                  handleClickFavorite={handleClickFavorite}
               />
            </div>
         ))}
      </Masonry>
   );
};
