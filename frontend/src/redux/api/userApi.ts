import { IGenericResponse, IUser } from '../../types';
import { setUser } from '../features/userSlice';
import { apiSlice } from './apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.mutation<any, any>({
      query: () => ({
        url: '/users/me',
        // credentials:'include'
      }),
      transformResponse: (result: { data: { user: IUser } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const resp = await queryFulfilled;
          console.log(resp);
          // dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetMeMutation } = userApi;
