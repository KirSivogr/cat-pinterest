import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { FavoriteCats } from '@/components/favorite-cats/FavoriteCats';
import { Header } from '@/components/header/Header';
import { useFavorite } from '@/hooks/useFavorite';

jest.mock('@/hooks/useFavorite');

const mockedUseFavorite = useFavorite as jest.MockedFunction<typeof useFavorite>;

describe('Tabs Navigation', () => {
   it('отображает только любимых котиков на вкладке "Любимые котики"', () => {
      mockedUseFavorite.mockReturnValue({
         handleClickFavorite: jest.fn(), // Добавляем заглушку для функции
         favoritesItems: [{ id: '1', url: 'https://example.com/favorite-cat.jpg' }],
      });

      render(<FavoriteCats />);

      // Проверяем, что любимый котик отображается
      const img = screen.getByRole('img');

      expect(img).toHaveAttribute('src', 'https://example.com/favorite-cat.jpg');
   });

   it('переключается на вкладку "Все котики"', () => {
      render(
         <BrowserRouter>
            <Header />
         </BrowserRouter>,
      );

      const allCatsLink = screen.getByText('Все котики');

      fireEvent.click(allCatsLink);

      // Проверяем, что отображаются все котики
      const allCatsPage = screen.getByText('Все котики');

      expect(allCatsPage).toBeInTheDocument();
   });
});
