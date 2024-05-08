import Link from 'next/link'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container">
      <div className="flex flex-col space-y-4">
        <Link href="/" className="font-bold text-2xl">
          Back
        </Link>
        <div>{children}</div>
      </div>
    </main>
  )
}
