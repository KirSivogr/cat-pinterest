import axios, { AxiosInstance } from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const createAxiosInstance = (): AxiosInstance => {
   return axios.create({
      baseURL: 'https://api.thecatapi.com/v1/images/',
      headers: {
         Accept: 'application/json',
         'X-API-KEY': API_KEY || '',
      },
   });
};
