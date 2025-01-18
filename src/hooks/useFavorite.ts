import { useEffect, useState } from 'react';

import { IFilteredCat } from '@/types/interface';

export const useFavorite = () => {
   const [favoritesItems, setFavoritesItems] = useState<IFilteredCat[]>([]);

   useEffect(() => {
      const dataFromLocalStorage = localStorage.getItem('favorites');

      if (dataFromLocalStorage) {
         const favorites = JSON.parse(dataFromLocalStorage);

         setFavoritesItems(favorites);
      } else {
         localStorage.setItem('favorites', JSON.stringify([]));
      }
   }, []);

   const handleClickFavorite = (id: string, url: string) => {
      const dataFromLocalStorage = localStorage.getItem('favorites');

      if (dataFromLocalStorage) {
         const favorites = JSON.parse(dataFromLocalStorage);
         const indexOfFav = favorites.findIndex(
            (favorite: IFilteredCat) => favorite.id === id,
         );

         if (indexOfFav === -1) {
            const newFavorite = { id, url } as IFilteredCat;

            favorites.push(newFavorite);
         } else {
            favorites.splice(indexOfFav, 1);
         }

         localStorage.setItem('favorites', JSON.stringify(favorites));
         setFavoritesItems(favorites);
      }
   };

   return { handleClickFavorite, favoritesItems };
};
