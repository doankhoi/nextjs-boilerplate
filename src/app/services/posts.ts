import { Post } from '@/models';
import { createApi } from '@reduxjs/toolkit/query/react';
import { buildAppQuery } from './base';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: buildAppQuery(),
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
