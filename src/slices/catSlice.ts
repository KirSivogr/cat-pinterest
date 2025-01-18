import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCatList } from '@/api/catApi';
import { CatState, ICat, IFilteredCat } from '@/types/interface';

const initialState: CatState = {
   catsList: [],
   isLoading: false,
   isError: false,
};

export const fetchCatsList = createAsyncThunk<IFilteredCat[], number>(
   'cats/fetchCatsList',
   async (page: number) => {
      const response = await getCatList(page);

      return response.map((cat: ICat) => ({ id: cat.id, url: cat.url }));
   },
);

const catSlice = createSlice({
   name: 'cats',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(fetchCatsList.pending, state => {
            state.isLoading = true;
         })
         .addCase(
            fetchCatsList.fulfilled,
            (state, action: PayloadAction<IFilteredCat[]>) => {
               state.isLoading = false;
               state.catsList = [...state.catsList, ...action.payload];
            },
         )
         .addCase(fetchCatsList.rejected, state => {
            state.isLoading = false;
            state.isError = true;
         });
   },
});

export default catSlice.reducer;
