import { MasonryGrid } from '@/components/masonry-grid/MasonryGrid';
import { useFavorite } from '@/hooks/useFavorite';

import './FavoriteCats.module.scss';

export const FavoriteCats = () => {
   const { handleClickFavorite, favoritesItems } = useFavorite();

   return favoritesItems.length ? (
      <MasonryGrid
         catsList={favoritesItems}
         favoritesItems={favoritesItems}
         handleClickFavorite={handleClickFavorite}
      />
   ) : (
      <p>У тебя нет любимых котиков :(</p>
   );
};
