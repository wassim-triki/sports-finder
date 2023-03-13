import {
  fetchBaseQuery,
  FetchArgs,
  BaseQueryApi,
  createApi,
} from '@reduxjs/toolkit/query/react';
import config from '../../config/config';
import { RootState } from '../store';

const args = {};

const baseQuery = fetchBaseQuery({
  baseUrl: config.apiUrl,

  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

// const baseQueryWithReauth = async (
//   args: string | FetchArgs,
//   api: BaseQueryApi,
//   extraOptions: {}
// ) => {
//   let result = await baseQuery(args, api, extraOptions);
//   // if result is error 403 forbidden send refresh token request
// };

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
