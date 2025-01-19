import { AxiosResponse } from 'axios';

import { CATS_PER_PAGE } from '@/constants/constants';

import { createAxiosInstance } from './instanse';

const instance = createAxiosInstance();

export async function getCatList(page: number) {
   const response: AxiosResponse = await instance.get(
      `search?$api_key=${process.env.REACT_APP_API_KEY}`,
      {
         params: {
            page,
            limit: CATS_PER_PAGE,
         },
      },
   );

   return response.data;
}
