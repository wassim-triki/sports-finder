import { IGenericResponse, IUser } from '../../types';
import { setCredentials, setToken, setUser } from '../features/authSlice';
import { apiSlice } from './apiSlice';
import { userApi } from './userApi';

type GetMeResponse = {
  user: IUser;
};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, any>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
        // credentials: 'include',
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const resp = await queryFulfilled;
          const { token } = resp.data;
          dispatch(setToken(token));
          await dispatch(authApi.endpoints.getMe.initiate(null));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getMe: builder.mutation<GetMeResponse, any>({
      query: () => ({
        url: '/auth/me',
        // credentials:'include'
      }),

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const resp = await queryFulfilled;
          const { user } = resp.data;
          dispatch(setUser(user));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
