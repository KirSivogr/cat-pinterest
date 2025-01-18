import { fireEvent, render, screen } from '@testing-library/react';

import { useFavorite } from '@/hooks/useFavorite';
import { IFilteredCat } from '@/types/interface';

import { MasonryGrid } from './MasonryGrid';

jest.mock('@/hooks/useFavorite');

describe('MasonryGrid', () => {
   it('добавляет котика в "любимые" при клике на сердечко', () => {
      const handleClickFavorite = jest.fn();
      const favoritesItems: IFilteredCat[] = [];

      (useFavorite as jest.Mock).mockReturnValue({
         handleClickFavorite,
         favoritesItems,
      });

      render(
         <MasonryGrid
            catsList={[{ id: '1', url: 'https://example.com/cat1.jpg' }]}
            handleClickFavorite={handleClickFavorite}
            favoritesItems={favoritesItems}
         />,
      );

      const heartIcon = screen.getByTestId('heart-icon');

      fireEvent.click(heartIcon);

      expect(handleClickFavorite).toHaveBeenCalledWith(
         '1',
         'https://example.com/cat1.jpg',
      );
   });
});
