'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return <Gallery />
}

function Gallery() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {new Array(24).fill(0).map((_, index) => (
          <BlurImage key={index} />
        ))}
      </div>
    </div>
  )
}

function BlurImage() {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <Link
      href="https://user-images.githubusercontent.com/9113740/160291517-77c43bee-4169-4e43-9774-3097be0114f4.jpeg"
      className="group"
      target="_blank"
    >
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-8 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          alt=""
          src="https://user-images.githubusercontent.com/9113740/160291517-77c43bee-4169-4e43-9774-3097be0114f4.jpeg"
          className={cn(
            'group-hover:opacity-75 object-cover duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          fill
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Lee Robinson</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@leeerob</p>
    </Link>
  )
}
