import React from 'react'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

export default function Blog() {
  return (
    <div class='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}
