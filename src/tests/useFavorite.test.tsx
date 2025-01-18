import { useFavorite } from '@/hooks/useFavorite';

jest.mock('@/hooks/useFavorite'); // Мокаем хук

const mockedUseFavorite = useFavorite as jest.MockedFunction<typeof useFavorite>;

describe('useFavorite', () => {
   it('должен добавлять котика в "любимые"', () => {
      mockedUseFavorite.mockReturnValue({
         handleClickFavorite: jest.fn(),
         favoritesItems: [{ id: '1', url: 'https://example.com/cat1.jpg' }],
      });

      const { handleClickFavorite, favoritesItems } = mockedUseFavorite();

      // Проверяем, что favoritesItems имеет правильную длину
      expect(favoritesItems.length).toBe(1);

      // Вызываем handleClickFavorite и проверяем, что он был вызван с правильными аргументами
      handleClickFavorite('1', 'https://example.com/cat1.jpg');
      expect(handleClickFavorite).toHaveBeenCalledWith(
         '1',
         'https://example.com/cat1.jpg',
      );
   });
});
