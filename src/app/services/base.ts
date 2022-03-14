import axios, { Method } from 'axios';
import { toast } from 'react-hot-toast';
import { store } from '@/app/store';
import { FetchBaseQueryArgs } from '@reduxjs/toolkit/src/query/fetchBaseQuery';

export const axiosBaseQuery =
  ({ baseUrl, usingToken }: FetchBaseQueryArgs & { usingToken?: boolean }) =>
  async ({
    url,
    method,
    data,
  }: {
    url: string;
    method: Method;
    data?: any;
  }) => {
    if (usingToken) {
      const persistedToken = store.getState().auth.token;
      axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;
    } else {
      axios.defaults.headers.common.Authorization = '';
    }

    try {
      const result = await axios({ url: `${baseUrl}${url}`, method, data });
      return { data: result.data };
    } catch (err: any) {
      let error = { status: err.response?.status, data: err.response?.data };
      if (error.status === 400) {
        toast.error('The name is already in use 🤷‍♂️');
      } else if (error.status === 401) {
        toast.error('Please, authenticate first! ✌😎');
      } else {
        toast.error('Somethings wrong! Please try again later! 😢');
      }
      return err;
    }
  };

export const buildAppQuery = (usingToken?: boolean) => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  return axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    usingToken: usingToken,
  });
};

export default axiosBaseQuery;
