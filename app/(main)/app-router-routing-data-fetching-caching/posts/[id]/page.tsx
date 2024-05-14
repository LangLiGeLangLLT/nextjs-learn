import { Post } from '@/lib/types'
import React from 'react'

async function getPost(postId: string): Promise<Post> {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((res) => res.json())
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post: Post = await getPost(params.id)

  return {
    title: post.title,
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const post: Post = await getPost(params.id)

  return (
    <div>
      <h1 className="text-3xl">Post ID: {params.id}</h1>
      <div>{post.body}</div>
    </div>
  )
}
