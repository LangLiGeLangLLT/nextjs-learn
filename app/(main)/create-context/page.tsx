'use client'

import React, { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './theme-provider'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <ThemeProvider>
      <div>Page</div>
      <MyButton />
    </ThemeProvider>
  )
}

function MyButton() {
  const theme = useContext(ThemeContext)

  return <Button>{theme}</Button>
}
