import { Metadata } from 'next'
import React from 'react'

type Time = {
  datetime: string
}

export const metadata: Metadata = {
  title: 'About',
}

async function getTime1(): Promise<Time> {
  return await fetch('http://worldtimeapi.org/api/timezone/America/Chicago', {
    cache: 'no-store',
  }).then((res) => res.json())
}

async function getTime2(): Promise<Time> {
  return await fetch('http://worldtimeapi.org/api/timezone/America/Chicago', {
    next: {
      revalidate: 5,
    },
  }).then((res) => res.json())
}

export default async function Page() {
  const [time1, time2] = await Promise.all([getTime1(), getTime2()])

  return (
    <div>
      <h1 className="text-3xl">{time1.datetime}</h1>
      <h1 className="text-3xl">{time2.datetime}</h1>
    </div>
  )
}
