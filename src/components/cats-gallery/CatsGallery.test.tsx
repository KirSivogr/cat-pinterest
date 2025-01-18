import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen, waitFor } from '@testing-library/react';

import { useAppSelector } from '@/hooks/useAppSelector';

import { CatsGallery } from './CatsGallery';

jest.mock('@/hooks/useAppSelector');

describe('CatsGallery', () => {
   it('должна отображаться страница с котиками', async () => {
      const mockStore = configureStore({
         reducer: {
            cats: (state = { catsList: [], isLoading: false, isError: false }) => state,
         },
      });

      (useAppSelector as jest.Mock).mockReturnValue({
         catsList: [{ id: '1', url: 'https://example.com/cat1.jpg' }],
         isLoading: false,
         isError: false,
      });

      render(
         <Provider store={mockStore}>
            <CatsGallery />
         </Provider>,
      );

      await waitFor(() => {
         expect(screen.getByRole('img')).toHaveAttribute(
            'src',
            'https://example.com/cat1.jpg',
         );
      });
   });
});
