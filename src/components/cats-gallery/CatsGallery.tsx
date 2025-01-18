import React, { useEffect } from 'react';

import { Loader } from '@/components/loader/Loader';
import { MasonryGrid } from '@/components/masonry-grid/MasonryGrid';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useFavorite } from '@/hooks/useFavorite';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { fetchCatsList } from '@/slices/catSlice';

import './CatsGallery.module..scss';

export const CatsGallery: React.FC = () => {
   const { page } = useInfiniteScroll();
   const { handleClickFavorite, favoritesItems } = useFavorite();

   const dispatch = useAppDispatch();
   const { catsList, isLoading, isError } = useAppSelector(state => state.cats);

   useEffect(() => {
      dispatch(fetchCatsList(page));
   }, [dispatch, page]);

   return (
      <div className='cats-gallery-container' data-testid='cats-gallery-container'>
         {isError ? (
            <p className='error-message'>Что-то пошло не так... Перезагрузите страницу</p>
         ) : (
            <MasonryGrid
               catsList={catsList}
               handleClickFavorite={handleClickFavorite}
               favoritesItems={favoritesItems}
            />
         )}
         {isLoading && <Loader />}
      </div>
   );
};
