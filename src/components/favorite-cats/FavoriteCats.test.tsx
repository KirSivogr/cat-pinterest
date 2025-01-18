import { render, screen } from '@testing-library/react';

import { FavoriteCats } from '@/components/favorite-cats/FavoriteCats';
import { useFavorite } from '@/hooks/useFavorite';

jest.mock('@/hooks/useFavorite');

describe('FavoriteCats', () => {
   it('показывает сообщение о том, что нет любимых котиков', () => {
      (useFavorite as jest.Mock).mockReturnValue({ favoritesItems: [] });

      render(<FavoriteCats />);

      const message = screen.getByText('У тебя нет любимых котиков :(');

      expect(message).toBeInTheDocument(); // Проверка, что сообщение отображается на экране
   });
});
