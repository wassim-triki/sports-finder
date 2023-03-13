import { UpdateUserRequest } from '../../components/ContactForm';
import { IGenericResponse, IUser } from '../../types';
import { setUser } from '../features/userSlice';
import { apiSlice } from './apiSlice';

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation<any, UpdateUserRequest>({
      query: ({ userId, body }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body,
        // credentials:'include'
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const resp = await queryFulfilled;
          // dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useUpdateUserMutation } = userApi;
