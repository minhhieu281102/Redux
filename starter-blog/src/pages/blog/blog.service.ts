import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (build) => ({
    getPost: build.query<Post[], void>({
      query: () => 'posts',
      providesTags(result) {
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            { type: 'Posts' as const, id: 'LIST' }
          ]
          return final
        }
        const final = [{ type: 'Posts' as const, id: 'LIST' }]
        return final
      }
    }),
    addPost: build.mutation<Post, Omit<Post, 'id'>>({
      query(body) {
        return {
          url: 'posts',
          method: 'POST',
          body
        }
      },
      invalidatesTags: (result, error, body) => [{ type: 'Posts', id: 'LIST' }]
    })
  })
})

export const { useGetPostQuery, useAddPostMutation } = blogApi
