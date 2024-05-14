import { Post } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

export default async function Page() {
  const posts: Post[] = await fetch(
    `https://jsonplaceholder.typicode.com/posts`
  ).then((res) => res.json())

  return (
    <div>
      <div className="text-xl font-bold">
        <Link href="/app-router-routing-data-fetching-caching/about">
          About
        </Link>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              className="hover:underline"
              href={`/app-router-routing-data-fetching-caching/posts/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
