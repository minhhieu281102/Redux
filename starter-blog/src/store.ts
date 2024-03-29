import { configureStore } from '@reduxjs/toolkit'
import { blogApi } from 'pages/blog/blog.service'
import blogReducer from 'pages/blog/blog.slide'
import { setupListeners } from '@reduxjs/toolkit/query/react'
// ...
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    [blogApi.reducerPath]: blogApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware)
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
