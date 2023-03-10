import { createReducer, createAction } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: initalPostList
}

export const addPost = createAction<Post>('blog/postBlog')

const blogReducer = createReducer(initialState, (builder) => {
  builder.addCase(addPost, (state, action) => {
    // immerjs giup mutate 1 state 1 cach an toan
    const post = action.payload
    state.postList.push(post)
  })
})

export default blogReducer
