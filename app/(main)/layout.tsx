'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <main className="container">
      <div className="flex flex-col space-y-4">
        <div>
          <button onClick={() => router.back()} className="font-bold text-2xl">
            Back
          </button>
        </div>
        <div>{children}</div>
      </div>
    </main>
  )
}
