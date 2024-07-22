'use client'

import { Input } from '@/components/ui/input'
import React from 'react'

export default function Page() {
  return (
    <div>
      <MyApp />
    </div>
  )
}

function MyApp() {
  const [name, setName] = React.useState('')
  const [address, setAddress] = React.useState('')
  return (
    <>
      <label>
        Name{': '}
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <Input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  )
}

const Greeting = React.memo(function Greeting({ name }: { name: string }) {
  console.log('Greeting was rendered at', new Date().toLocaleTimeString())
  return (
    <h3>
      Hello{name && ', '}
      {name}!
    </h3>
  )
})
